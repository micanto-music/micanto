<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TrackResource;
use App\Models\Album;
use App\Models\Artist;
use App\Models\Playlist;
use App\Repositories\PlaylistRepository;
use App\Repositories\TrackRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoritesController extends Controller
{
    public function __construct(
        private TrackRepository $trackRepository,
        private PlaylistRepository $playlistRepository
    )
    {}

    public function show(Request $request)
    {
        return TrackResource::collection(
            $this->trackRepository->getSortableFavorites(
                $request->sort ?: 'tracks.title',
                $request->order ?: 'asc'
            )
        );
    }
}
