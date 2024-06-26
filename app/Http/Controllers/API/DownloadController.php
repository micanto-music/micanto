<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Artist;
use App\Models\Playlist;
use App\Models\Track;
use App\Models\Album;
use App\Repositories\TrackRepository;

class DownloadController extends Controller
{

    public function __construct(
        private TrackRepository $trackRepository
    )
    {}

    public function track(Track $track)
    {
        return response()->download($track->path);
    }

    public function album(Album $album)
    {
        return $album->tracks->pluck('id');
    }

    public function artist(Artist $artist)
    {
        return $this->trackRepository->getTracksByArtists($artist)->pluck('id');
    }

    public function playlist(Playlist $playlist)
    {
        return $playlist->tracks->pluck('id');
    }

}
