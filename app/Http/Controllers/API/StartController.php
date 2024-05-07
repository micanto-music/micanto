<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\AlbumResource;
use App\Http\Resources\TrackResource;
use App\Models\Album;
use App\Models\Playlist;
use App\Repositories\AlbumRepository;
use App\Repositories\PlaylistRepository;
use App\Repositories\TrackRepository;

class StartController extends Controller
{

    public function __construct(
        private TrackRepository $trackRepository,
        private AlbumRepository $albumRepository,
        private PlaylistRepository $playlistRepository,
    )
    {}

    public function index()
    {
        return response()->json([
            'most_played' => TrackResource::collection($this->trackRepository->getMostPlayed(5)),
            'last_played' => TrackResource::collection($this->trackRepository->getLastPlayed(5)),
            'latest_tracks' => TrackResource::collection($this->trackRepository->getLastAdded(4)),
            'latest_albums' => AlbumResource::collection($this->albumRepository->getLastAdded(5)),
            'playlists' => $this->playlistRepository->getPlaylistsWithCountAndCovers()
        ]);

    }

}
