<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\AlbumResource;
use App\Http\Resources\TrackResource;
use App\Models\Album;
use App\Models\Track;
use App\Repositories\TrackRepository;
use App\Services\ImageService;
use App\Services\PruneService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AlbumController extends Controller
{

    public function __construct(
        private PruneService $pruneService,
        private TrackRepository $trackRepository,
        private ImageService $imageService
    )
    {}

    public function show(Album $album)
    {
        $tracks = $this->trackRepository->getTracksByAlbum($album);
        $discs = TrackResource::collection($tracks)->collection->groupBy('disc');

        return response()->json([
            'album'     => AlbumResource::make($album),
            'discs'     => $discs,
            'artist'    => $album->artist
        ]);
    }

    public function update(Album $album, Request $request)
    {
        $this->authorize('admin', Auth::user());
        if($album) {

            if( $request->has('image')) {
                $image = $request->image;
                $extension = explode('/', $image->getMimeType());
                $extension = $extension[1] ?? 'png';
                $filename = $this->imageService->createAlbumImage($image,$extension,$album);
                $album->cover = basename($filename);
            }

            $is_compilation = $request->compilation == 'true';
            if($is_compilation) {
                $compilationAlbum = Album::where([
                    'artist_id' => 2,
                    'name' => trim($request->name)
                ])->first();

                if($compilationAlbum && $compilationAlbum->id != $album->id) {
                    // update tracks
                    Track::where([
                        'album_id' => $album->id
                    ])->update(['album_id' => $compilationAlbum->id]);

                    $album = $compilationAlbum;
                }
                $album->artist_id = 2;
            }
            $album->name = $request->name;
            $album->is_single = $request->single == 'true';
            $album->year = $request->year;
            $album->is_compilation = $is_compilation;
            $album->save();
        }



        return response()->json([
            'albums' => AlbumResource::collection([$album]),
            'removed' => $this->pruneService->pruneDB()
        ]);
    }

    public function combine(Request $request) {
        $this->authorize('admin', Auth::user());
        $ids = $request->albums;
        $response = [];
        if(count($ids) > 1) {
            // get albums
            $mainId = array_shift($ids);
            $mainAlbum = Album::find($mainId);

            // get all tracks by album id and set it to main album
            foreach($ids as $id) {
                $album = Album::find($id);
                foreach($album->tracks as $track) {
                    $track->album_id = $mainId;
                    $track->save();
                }

                $response['removed']['albums'][] = $album;

                // delete album
                $album->delete();
            }
            $response['albums'] = [AlbumResource::make($mainAlbum)];

        }
        return response()->json($response);

    }
}
