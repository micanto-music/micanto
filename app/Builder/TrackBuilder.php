<?php
namespace App\Builder;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Support\Facades\Auth;

class TrackBuilder extends Builder
{
    public function withData()
    {

        return self::with(['artists', 'album', 'album.artist'])
            ->leftJoin('interactions', static function (JoinClause $join): void {
                $join->on('interactions.track_id', '=', 'tracks.id')->where('interactions.user_id', Auth::id());
            })
            ->join('albums', 'tracks.album_id', '=', 'albums.id')
            ->join('artists', 'albums.artist_id', '=', 'artists.id')
            ->select(
                'tracks.*',
                'albums.name',
                'artists.name',
                'interactions.liked',
                'interactions.play_count'
            );
    }
}
