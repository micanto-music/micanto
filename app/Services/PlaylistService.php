<?php

namespace App\Services;

use App\Models\Album;
use App\Models\Artist;
use App\Models\Playlist;
use App\Repositories\TrackRepository;

class PlaylistService
{
    public function __construct(private TrackRepository $trackRepository)
    {}

    public function addItems(Playlist $playlist, string $type, array $ids): void
    {
        switch ($type) {
            case 'album':
                $album = Album::find($ids[0]);
                if ($album) {
                    $tracks = $this->trackRepository->getTracksByAlbum($album)->pluck('id');
                    $playlist->tracks()->syncWithoutDetaching($tracks);
                }
                break;
            case 'artist':
                $artist = Artist::find($ids[0]);
                if ($artist) {
                    $tracks = $this->trackRepository->getTracksByArtists($artist)->pluck('id');
                    $playlist->tracks()->syncWithoutDetaching($tracks);
                }
                break;
            case 'tracks':
                $playlist->tracks()->syncWithoutDetaching($ids);
                break;
        }
    }

    public function removeItems(Playlist $playlist, string $type, array $ids): void
    {
        if ($type === 'tracks') {
            $playlist->tracks()->detach($ids);
        }
    }
}
