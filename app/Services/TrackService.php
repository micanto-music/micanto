<?php

namespace App\Services;

use App\Models\Album;
use App\Models\Artist;
use App\Models\Track;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class TrackService
{
    public function __construct(
        private ImageService $imageService,
        private MusicSyncService $musicSyncService,
        private PruneService $pruneService
    ) {}

    public function updateTrack(Track $track, array $data): Track
    {
        $albumArtistName = null;
        if (isset($data['artists']) && is_array($data['artists'])) {
            $requestArtists = $data['artists'];
            $albumArtistName = array_shift($requestArtists);
        }

        if (!$albumArtistName) {
            $albumArtist = $track->album->artist;
        } else {
            $albumArtist = Artist::firstOrCreate(['name' => $albumArtistName]);
        }

        $albumName = $data['album'] ?? $track->album->name;
        
        if ('Unknown Album' === $track->album->name) {
            $album = Album::firstOrCreate([
                'artist_id' => $albumArtist->id,
                'name' => trim($albumName)
            ]);
        } else {
            $album = Album::where([
                'artist_id' => $albumArtist->id,
                'name' => trim($albumName)
            ])->first();

            if (!$album) {
                $album = $track->album;
            }

            $album->artist_id = $albumArtist->id;
            $album->name = $albumName;
        }

        if (isset($data['compilation']) && $data['compilation'] === 'true') {
            $album->artist_id = Artist::COMPILATION;
            $album->is_compilation = true;
        }

        if (!$album->year && !empty($data['year'])) {
            $album->year = $data['year'];
        }

        // Handle Image/Cover
        if (isset($data['image'])) {
            $image = $data['image'];
            $extension = $image->getClientOriginalExtension() ?: 'png';
            $filename = $this->imageService->createAlbumImage($image, $extension, $album);
            $album->cover = basename($filename);
        } elseif (!$album->cover) {
            $cover = $this->musicSyncService->findAndCreateCover($album, [], $track->path);
            if ($cover) {
                $album->cover = basename($cover);
            }
        }

        $album->save();

        // Sync Artists
        $artistIds = [$albumArtist->id];
        if (isset($data['artists']) && is_array($data['artists'])) {
            foreach ($data['artists'] as $feature) {
                $artist = Artist::firstOrCreate(['name' => trim($feature)]);
                $artistIds[] = $artist->id;
            }
        }
        $track->artists()->sync(array_unique($artistIds));

        // Update Track Details
        $track->album_id = $album->id;
        $track->title = $data['title'] ?? $track->title;
        $track->track = $data['track'] ?? 0;
        $track->disc = $data['disc'] ?? 1;
        $track->genre = $data['genre'] ?? $track->genre;
        $track->year = $data['year'] ?? $track->year;
        $track->explicit = ($data['explicit'] ?? '') === 'true';

        $track->save();

        return $track;
    }

    public function syncTracks(): int
    {
        Artisan::call('micanto:sync');
        $output = Artisan::output();
        preg_match('/(\d) new or/', $output, $matches);
        
        $this->pruneService->pruneDB();
        
        return isset($matches[1]) ? (int) $matches[1] : 0;
    }

    public function deleteTracks(array $ids, bool $shouldBackUp = false): void
    {
        $tracks = Track::query()->findMany($ids);
        
        foreach ($tracks as $track) {
            try {
                if ($shouldBackUp) {
                    if (file_exists($track->path)) {
                        rename($track->path, $track->path . '.bak');
                    }
                } else {
                    if (file_exists($track->path)) {
                        unlink($track->path);
                    }
                }
            } catch (\Throwable $e) {
                // Log error if needed, but continue
            }
        }

        Track::destroy($ids);
        $this->pruneService->pruneDB();
    }
}
