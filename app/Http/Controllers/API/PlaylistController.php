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

class PlaylistController extends Controller
{
    public function __construct(
        private TrackRepository $trackRepository,
        private PlaylistRepository $playlistRepository
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

    public function add(Request $request)
    {
        $playlist = new Playlist;
        $playlist->name = $request->formData['name'];
        $playlist->user_id = Auth::id();
        $playlist->save();
        return $playlist;
    }

    public function edit(Playlist $playlist, Request $request)
    {
        $this->authorize('own', $playlist);
        $playlist->name = $request->formData['name'];
        $playlist->save();
        return $playlist;
    }

    public function addItems(Playlist $playlist, Request $request)
    {
        $this->authorize('own', $playlist);
        $type = $request->type;
        switch ($type) {
            case 'album':
                $id = $request->ids[0];
                $album = Album::find($id);
                $tracks = $this->trackRepository->getTracksByAlbum($album)->pluck('id');
                $playlist->tracks()->syncWithoutDetaching($tracks);
                break;
            case 'artist':
                $id = $request->ids[0];
                $artist = Artist::find($id);
                $tracks = $this->trackRepository->getTracksByArtists($artist)->pluck('id');
                $playlist->tracks()->syncWithoutDetaching($tracks);
                break;
            case 'tracks':
                $playlist->tracks()->syncWithoutDetaching($request->ids);
                break;
        }
        return response()->noContent();
    }

    public function removeItems(Playlist $playlist, Request $request)
    {
        $this->authorize('own', $playlist);
        $type = $request->type;
        switch ($type) {
            case 'album':
                break;
            case 'artist':
                break;
            case 'tracks':
                $playlist->tracks()->detach($request->ids);
                break;
        }
        return response()->noContent();
    }

    public function all()
    {
        return $this->playlistRepository->getUserPlaylists();
    }

}
