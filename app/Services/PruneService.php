<?php

namespace App\Services;

use App\Models\Album;
use App\Models\Artist;

class PruneService {

    public function pruneDB(): array
    {
        $albumQuery = Album::query()
            ->leftJoin('tracks', 'tracks.album_id', '=', 'albums.id')
            ->whereNull('tracks.album_id');

        $artistQuery = Artist::query()
            ->doesntHave('tracks')
            ->leftJoin('albums', 'albums.artist_id', '=', 'artists.id')
            ->whereNull('albums.artist_id');


        $results = [
            'albums' => $albumQuery->get('albums.*'),
            'artists' => $artistQuery->get('artists.*'),
        ];

        try {
            $albumQuery->delete();
            $artistQuery->delete();
        } catch (\Throwable)
        {
        }
        return $results;
    }

}
