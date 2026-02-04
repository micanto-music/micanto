<?php

namespace App\Services;

use App\Http\Resources\AlbumResource;
use App\Http\Resources\TrackResource;
use App\Http\Resources\ArtistResource;
use App\Models\Album;
use App\Models\Artist;
use App\Models\Track;
use App\Repositories\TrackRepository;
use Illuminate\Support\Collection;

class SearchService
{
    public function __construct(private TrackRepository $trackRepository) {}

    public function searchAll(string $term): array
    {
        // 1. Get initial results from Scout
        $trackIds = Track::search($term)->take(5)->get()->pluck('id')->all();
        $tracks = $this->trackRepository->findByIds($trackIds);
        
        $albums = Album::search($term)->take(5)->get();
        $artists = Artist::search($term)->take(5)->get();

        // 2. Determine Top Result based on scores
        $topResult = $this->determineTopResult($term);

        return [
            'tracks' => TrackResource::collection($tracks),
            'albums' => AlbumResource::collection($albums),
            'artists' => ArtistResource::collection($artists),
            'top' => $topResult,
        ];
    }

    private function determineTopResult(string $term): mixed
    {
        // We fetch one result of each to see who has the highest score
        $track = Track::search($term)->first();
        $artist = Artist::search($term)->first();
        $album = Album::search($term)->first();

        $scores = collect([
            'track' => ['model' => $track, 'score' => $track?->__tntSearchScore__ ?? 0],
            'artist' => ['model' => $artist, 'score' => $artist?->__tntSearchScore__ ?? 0],
            'album' => ['model' => $album, 'score' => $album?->__tntSearchScore__ ?? 0],
        ]);

        // Boost exact matches
        if ($artist && strtolower($artist->name) === strtolower($term)) {
            $scores['artist']['score'] *= 2.5;
        }
        if ($album && strtolower($album->name) === strtolower($term)) {
            $scores['album']['score'] *= 2.5;
        }

        $winner = $scores->sortByDesc('score')->first();

        if (!$winner || $winner['score'] === 0) {
            return null;
        }

        $model = $winner['model'];
        
        return match (true) {
            $model instanceof Track => array_merge(TrackResource::make($model)->resolve(), ['type' => 'track']),
            $model instanceof Artist => array_merge(ArtistResource::make($model)->resolve(), ['type' => 'artist']),
            $model instanceof Album => array_merge(AlbumResource::make($model)->resolve(), ['type' => 'album']),
            default => null,
        };
    }
}
