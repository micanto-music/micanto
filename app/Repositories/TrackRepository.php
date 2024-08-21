<?php

namespace App\Repositories;

use App\Models\Playlist;
use App\Models\Track;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class TrackRepository extends Repository
{
    public function getSortableList(
        string $sortColumn,
        string $sortDirection
    ): Paginator {

        $query = Track::withData()->
            orderBy($sortColumn, $sortDirection);

        if ($sortColumn === 'artists.name') {
            $query->orderBy('albums.name')
                ->orderBy('tracks.disc')
                ->orderBy('tracks.track')
                ->orderBy('tracks.title');
        } elseif ($sortColumn === 'albums.name') {
            $query->orderBy('artists.name')
                ->orderBy('tracks.disc')
                ->orderBy('tracks.track')
                ->orderBy('tracks.title');
        } elseif ($sortColumn === 'tracks.title') {
            $query->orderBy('tracks.disc')
                ->orderBy('tracks.track');
        }

        return $query->simplePaginate(50);
    }

    public function makeSortable( $query, $sortColumn,  $sortDirection)
    {
        //dump($sortColumn);
        if($sortColumn === 'random') {
            $query->inRandomOrder();
        } else  {
            $query->orderBy($sortColumn, $sortDirection);
        }

        if ($sortColumn === 'artists.name') {
            $query->orderBy('albums.name')
                ->orderBy('tracks.disc')
                ->orderBy('tracks.track')
                ->orderBy('tracks.title');
        } elseif ($sortColumn === 'albums.name') {
            $query->orderBy('artists.name')
                ->orderBy('tracks.disc')
                ->orderBy('tracks.track')
                ->orderBy('tracks.title');
        } elseif ($sortColumn === 'tracks.title') {
            $query->orderBy('tracks.disc')
                ->orderBy('tracks.track');
        } elseif ($sortColumn === 'playlist_track.created_at') {
            $query->orderBy('tracks.disc')
                ->orderBy('tracks.track')
                ->orderBy('tracks.title');
        }

        return $query;
    }

    public function getSortablePlayList(
        Playlist $playlist,
        string $sortColumn,
        string $sortDirection
    ) {
        $query = Track::withData()
            ->leftJoin('playlist_track', 'tracks.id', '=', 'playlist_track.track_id')
            ->leftJoin('playlists', 'playlists.id', '=', 'playlist_track.playlist_id')
            ->where('playlists.id', $playlist->id)
            ->select(
                'tracks.*',
                'albums.name',
                'artists.name',
                'playlist_track.created_at',
                'interactions.liked'
            );

        return $this->makeSortable($query, $sortColumn, $sortDirection)->paginate(50);
    }

    public function getSortableFavorites(
        string $sortColumn,
        string $sortDirection
    ) {
        $query = Track::withData()
            ->where('interactions.liked', true)
            ->select(
                'tracks.*',
                'albums.name',
                'artists.name',
                'interactions.liked'
            );

        return $this->makeSortable($query, $sortColumn, $sortDirection)->paginate(50);
    }

    public function generatePlaylistQueue( array $context, int $max = 100)
    {
        $query = Track::withData()
            ->leftJoin('playlist_track', 'tracks.id', '=', 'playlist_track.track_id')
            ->leftJoin('playlists', 'playlists.id', '=', 'playlist_track.playlist_id')
            ->where('playlists.id', $context['id'])
            ->select(
                'tracks.*',
                'albums.name',
                'artists.name',
                'playlist_track.created_at'
            );

        $sortField = isset($context['options']['sortField']) ? $context['options']['sortField'] : 'title';
        $sortOrder = isset($context['options']['order']) ? $context['options']['order'] : 'asc';
        $startIndex = isset($context['options']['index']) ? (int) $context['options']['index']: 0;

        if(isset($context['options']['shuffle']) && $context['options']['shuffle'] !== false) {
            $sortField = 'random';
        }

        $res = $this->makeSortable($query, $sortField, $sortOrder)->offset($startIndex)->limit($max)->get();
        if(count($res) < $max && $startIndex > $max) {
            $res2 = $this->makeSortable($query, $sortField, $sortOrder)->offset(0)->limit($max)->get();
            if(count($res2) > 0) {
                $res = $res->merge($res2);
            }
        }

        return $res;
    }

    public function generateFavoriteQueue( array $context, int $max = 100)
    {
        $query = Track::withData()
            ->where('interactions.liked', true)
            ->select(
                'tracks.*',
                'albums.name',
                'artists.name'
            );

        $sortField = isset($context['options']['sortField']) ? $context['options']['sortField'] : 'title';
        $sortOrder = isset($context['options']['order']) ? $context['options']['order'] : 'asc';
        $startIndex = isset($context['options']['index']) ? (int) $context['options']['index']: 0;

        if(isset($context['options']['shuffle']) && $context['options']['shuffle'] !== false) {
            $sortField = 'random';
        }

        $res = $this->makeSortable($query, $sortField, $sortOrder)->offset($startIndex)->limit($max)->get();
        if(count($res) < $max && $startIndex > $max) {
            $res2 = $this->makeSortable($query, $sortField, $sortOrder)->offset(0)->limit($max)->get();
            if(count($res2) > 0) {
                $res = $res->merge($res2);
            }
        }

        return $res;
    }

    public function getMostPlayed(int $count = 7): Collection
    {
        return Track::withData()
            ->where('interactions.play_count', '>', 0)
            ->orderByDesc('interactions.play_count')
            ->limit($count)
            ->get();
    }

    public function getMostPlayedByArtist($artist, int $count = 7, ): Collection
    {
        return Track::withData()
            ->where('interactions.play_count', '>', 0)
            ->where('albums.artist_id', '=', $artist->id)
            ->orderByDesc('interactions.play_count')
            ->limit($count)
            ->get();
    }

    public function getTracksByArtists($artist, int $count = 10000): Collection
    {
        return Track::withData()
            ->where('albums.artist_id', '=', $artist->id)
            ->orderBy('albums.name')
            ->orderBy('tracks.disc')
            ->orderBy('tracks.track')
            ->orderBy('tracks.title')
            ->limit($count)
            ->get();
    }

    public function getTracksByAlbum($album, int $count = 10000): Collection
    {
        return Track::withData()
            ->where('album_id', $album->id)
            ->orderBy('tracks.disc')
            ->orderBy('tracks.track')
            ->orderBy('tracks.title')
            ->limit($count)
            ->get();
    }

    public function getLastPlayed(int $count = 7): Collection
    {
        return Track::withData()
            ->orderByDesc('interactions.played_at')
            ->limit($count)
            ->get();
    }

    public function getFeaturedByArtist($artist, int $count = 7, ): Collection
    {
        return Track::withData()
            ->whereHas('artists', function (Builder $query) use ($artist) {
                $query->where('artist_id', '=', $artist->id);
            })
            ->where('albums.artist_id', '!=', $artist->id)
            ->limit($count)
            ->get();
    }

    public function getLastAdded(int $count = 7): Collection
    {
        return Track::withData()->orderByDesc('created_at')->limit($count)->get();
    }

    public function findByIds( $ids = [], $shuffle = false) {
        $tracks = Track::withData()->whereIn('tracks.id', $ids);
        if($shuffle) {
            return $tracks->inRandomOrder()->get();
        } else {
            return $tracks->get()->orderByArray($ids);
        }
    }

    public function getByStartIndex( $context ) {
        $max = 100;
        $sortField = isset($context['options']['sortField']) ? $context['options']['sortField'] : 'tracks.title';
        $sortOrder = isset($context['options']['order']) ? $context['options']['order'] : 'asc';
        $startIndex = isset($context['options']['index']) ? (int) $context['options']['index'] : 0;
        $query = Track::withData()->offset($startIndex)->orderBy($sortField, $sortOrder)->limit($max);
        $query->orderBy('tracks.disc')
            ->orderBy('tracks.track');

        $res = $query->get();
        if(count($res) < $max && $startIndex > $max) {
            $res2 = $this->makeSortable($query, $sortField, $sortOrder)->offset(0)->limit($max)->get();
            if(count($res2) > 0) {
                $res = $res->merge($res2);
            }
        }

        return $res;
    }
}
