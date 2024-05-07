<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Resources\AlbumResource;
use App\Http\Resources\TrackResource;
use App\Models\Artist;
use App\Models\Album;
use App\Models\Track;
use App\Repositories\TrackRepository;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function __construct(
        private TrackRepository $trackRepository
    ){}

    public function search(Request $request)
    {
        $search = $request->term;
        $tracks = TrackResource::collection($this->trackRepository->findByIds(Track::search($search)->get()->take(5)->pluck('id')->all()));

        $trackscore = Track::search($search)->get()->take(1)->pluck('__tntSearchScore__','id')->all();
        $artistScore = Artist::search($search)->get()->take(1)->pluck('__tntSearchScore__','id')->all();
        $albumScore = Album::search($search)->get()->take(1)->pluck('__tntSearchScore__','id')->all();

        $topScore = 0;
        $top = null;
        if(count($trackscore)) {
            $topScore = array_values($trackscore)[0];
            $top = TrackResource::make(Track::withData()->where('tracks.id', key($trackscore))->first());
            $top->type = 'track';
        }

        if(count($artistScore)) {
            $score = array_values($artistScore)[0];
            $artist = Artist::where('id', key($artistScore))->first();
            // boost artist on exact match
            if($artist && strtolower($artist->name) == strtolower($search)) {
                $score = $score * 2.5;
            }
            if($score > $topScore ) {
                $topScore = $score;
                $top = $artist;
                $top->type = 'artist';
            }
        }

        if(count($albumScore)) {
            $album = Album::where('id', key($albumScore))->first();
            $score = array_values($albumScore)[0];
            // boost album on exact match
            if($album && strtolower($album->name) == strtolower($search)) {
                $score = $score * 2.5;
            }
            if($score > $topScore ) {
                $top = AlbumResource::make($album);
            }
        }

        $artists = Artist::search($search)->get()->take(5);
        $albums = AlbumResource::collection(Album::search($search)->get()->take(5));
        $result = [
            'tracks' => $tracks,
            'albums' => $albums,
            'artists' => $artists,
            'top' => $top
        ];

        return response()->json($result);
    }

    public function searchArtists(Request $request)
    {
        $search = $request->search;
        $artists = Artist::where('name', 'like', '' . strtolower($search) . '%')->orderBy('name')->limit(10)->get();
        return response()->json($artists);
    }

    public function searchAlbum(Request $request)
    {
        $search = $request->search;
        $albums = Album::where('name', 'like', '%' . strtolower($search) . '%')->orderBy('name')->limit(10)->get();
        return response()->json($albums);
    }

}
