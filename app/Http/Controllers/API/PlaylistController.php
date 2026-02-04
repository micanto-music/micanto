<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\PlaylistResource;
use App\Http\Resources\TrackResource;
use App\Models\Album;
use App\Models\Artist;
use App\Models\Playlist;
use App\Repositories\PlaylistRepository;
use App\Repositories\TrackRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Http\Requests\API\PlaylistRequest;
use App\Services\PlaylistService;

class PlaylistController extends Controller
{
    public function __construct(
        private TrackRepository $trackRepository,
        private PlaylistRepository $playlistRepository,
        private PlaylistService $playlistService
    )
    {}

    public function show(Playlist $playlist,Request $request)
    {
        return TrackResource::collection(
            $this->trackRepository->getSortablePlayList(
                $playlist,
                $request->sort ?: 'tracks.title',
                $request->order ?: 'asc'
            )
        );
    }

    public function delete(Playlist $playlist)
    {
        $this->authorize('own', $playlist);
        $playlist->delete();
        return response()->noContent();
    }

    public function add(PlaylistRequest $request)
    {
        $playlist = Playlist::create([
            'name' => $request->input('formData.name'),
            'user_id' => Auth::id(),
        ]);

        return PlaylistResource::make($playlist);
    }

    public function edit(Playlist $playlist, PlaylistRequest $request)
    {
        $this->authorize('own', $playlist);
        
        $playlist->update([
            'name' => $request->input('formData.name'),
        ]);

        return PlaylistResource::make($playlist);
    }

    public function addItems(Playlist $playlist, Request $request)
    {
        $this->authorize('own', $playlist);
        
        $this->playlistService->addItems(
            $playlist, 
            $request->input('type'), 
            $request->input('ids')
        );

        return PlaylistResource::make($playlist);
    }

    public function removeItems(Playlist $playlist, Request $request)
    {
        $this->authorize('own', $playlist);
        
        $this->playlistService->removeItems(
            $playlist, 
            $request->input('type'), 
            $request->input('ids')
        );

        return response()->noContent();
    }

    public function all()
    {
        return PlaylistResource::collection($this->playlistRepository->getUserPlaylists());
    }
}
