<?php

namespace App\Repositories;

use App\Models\Playlist;
use Illuminate\Support\Facades\Auth;

class PlaylistRepository extends Repository
{

    public function getUserPlaylists()
    {
        return Playlist::query()->where('user_id', Auth::id())->withCount('tracks')->get();
    }

    public function getPlaylistsWithCountAndCovers( $count = 4, $trackCount = 10 )
    {
        $playlists = Playlist::query()->where('user_id', Auth::id())->with(['tracks' => function( $query) use($trackCount) {
            $query->limit($trackCount);
        }])->withCount('tracks')->limit($count)->get();

        // get cover and artists
        $pl = [];
        foreach($playlists as $key => $playlist)
        {
            // find 2 covers and some 3 artists
            $covers = [];
            $artists = [];
            $artistNames = [];
            $playlist->covers = [];
            $playlist->artists = [];
            foreach($playlist->tracks->take(10) as $track) {
                if($track->album->cover != '' && !in_array($track->album->cover,$covers)) {
                    $covers[] = $track->album->cover;
                }
                if($track->artists) {
                    foreach($track->artists as $artist) {
                        if( !in_array($artist->name, $artistNames)) {
                            $artists[] = $artist;
                            $artistNames[] = $artist->name;
                        }
                        if(count($artists) > 3) break;
                    }
                }
                $playlist->covers = $covers;
                $playlist->artists = $artists;
                if(count($playlist->covers) == 2) break;

            }
            $pl[] = $playlist;
        }

        return $pl;
    }

}
