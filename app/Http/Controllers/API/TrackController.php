<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\TrackUpdateRequest;
use App\Http\Resources\TrackResource;
use App\Models\Album;
use App\Models\Artist;
use App\Models\Song;
use App\Models\Track;
use App\Repositories\TrackRepository;
use App\Services\ImageService;
use App\Services\MusicSyncService;
use App\Services\PruneService;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;

class TrackController extends Controller
{

    public function __construct(
        private TrackRepository $trackRepository,
        private MusicSyncService $musicSyncService,
        private PruneService $pruneService,
        private ImageService $imageService
    )
    {}

    public function index(Request $request)
    {
        return TrackResource::collection(
            $this->trackRepository->getSortableList(
                $request->sort ?: 'tracks.title',
                $request->order ?: 'asc'
            )
        );
    }

    public function update(Request $request)
    {
        $this->authorize('admin', Auth::user());
        $trackIds = $request->tracks;
        $updated = [];
        foreach( $trackIds as $trackId ) {
            $track = Track::with(['artists', 'album', 'album.artist'])->find($trackId);
            $updated[] = $this->updateTrack($track,$request);
        }

        $this->pruneService->pruneDB();

        return response()->json([
            'tracks' => TrackResource::collection($updated)
        ]);
    }

    public function delete(Request $request)
    {
        $this->authorize('admin', Auth::user());
        $ids = $request->ids;

        $shouldBackUp = config('micanto.backup_on_delete');

        // remove from disk, to prevent resync
        $tracks = Track::query()->findMany($ids);
        $tracks->each(function (Track $track) use ($shouldBackUp): void {
            try {
                if ($shouldBackUp) {
                    rename($track->path, $track->path . '.bak');
                } else {
                    unlink($track->path);
                }
            } catch (Throwable $e) {

                // TODO implement logger
//                $this->logger->error('Failed to remove song file', [
//                    'path' => $song->path,
//                    'exception' => $e,
//                ]);
            }
        });

        // remove from DB
        Track::destroy($ids);

        return response()->noContent();
    }

    private function updateTrack(Track $track, $request): Track
    {
        $albumArtistName = null;
        if($request->artists && is_array($request->artists)){
            $requestArtist = $request->artists;
            $albumArtistName = array_shift($requestArtist);
        }

        if(!$albumArtistName) {
            $albumArtist = $track->album->artist;
        } else {
            $albumArtist = Artist::firstOrCreate([
                'name' => $albumArtistName
            ]);
        }

        $albumName = $request->album ?: $track->album->name;
        if('Unknown Album' === $track->album->name) {
            $album = Album::firstOrCreate([
                'artist_id' => $albumArtist->id,
                'name' => trim($albumName)
            ]);
        } else {
            $album = Album::where([
                'artist_id' => $albumArtist->id,
                'name' => trim($albumName)
            ])->first();

            if(!$album) {
                $album = $track->album;
            }

            $album->artist_id = $albumArtist->id;
            $album->name = $albumName;
        }

        $is_compilation = $request->compilation == 'true';
        if($is_compilation) {
            $album->artist_id = Artist::COMPILATION;
            $album->is_compilation = true;
        }

        if(!$album->year && !empty($request->year)) {
            $album->year = $request->year;
        }

        // new cover uploaded?
        if( $request->has('image')) {
            $image = $request->image;
            $extension = explode('/', $image->getMimeType());
            $extension = $extension[1] ?? 'png';
            $filename = $this->imageService->createAlbumImage($image,$extension,$album);
            $album->cover = basename($filename);
        } else {
            // get new cover
            if(!$album->cover) {
                $cover = $this->musicSyncService->findAndCreateCover($album, [], $track->path);
                if($cover) {
                    $album->cover = $cover;
                }
            }
        }

        $album->save();

        // if there are more artists, sync them
        $artistIds = [$albumArtist->id];
        $artists = $request->artists;
        if($artists && count($artists)){
            foreach($artists as $feature) {
                $artist = Artist::firstOrCreate([
                    'name' => trim($feature)
                ]);
                $artistIds[] = $artist->id;
            }
        }

        // add album
        $track->album_id = $album->id;

        // add artists
        $track->artists()->sync($artistIds);

        $track->title = $request->title ?: $track->title;
        $track->track = $request->track?: 0;
        $track->disc = $request->disc ?: 1;
        $track->genre = $request->genre;
        $track->year = $request->year;
        $track->explicit = $request->explicit == 'true';

        $track->save();
        return $track;
    }

    public function sync() {
        Artisan::call('micanto:sync');
        $output = Artisan::output();
        preg_match('/(\d) new or/',$output, $matches);
        return response()->json([
            'updated' => isset($matches[1]) ? $matches[1] : 0
        ]);
    }

    public function findByIds( Request $request ) {
        return TrackResource::collection($this->trackRepository->findByIds($request->ids));
    }
}
