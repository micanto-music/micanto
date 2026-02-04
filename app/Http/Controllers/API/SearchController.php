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

use App\Services\SearchService;
use App\Http\Resources\ArtistResource;
use App\Http\Resources\AlbumResource;

class SearchController extends Controller
{
    public function __construct(
        private SearchService $searchService
    ){}

    public function search(Request $request)
    {
        return response()->json(
            $this->searchService->searchAll($request->term)
        );
    }

    public function searchArtists(Request $request)
    {
        $search = $request->search;
        $artists = Artist::where('name', 'like', $search . '%')
            ->orderBy('name')
            ->limit(10)
            ->get();
            
        return ArtistResource::collection($artists);
    }

    public function searchAlbum(Request $request)
    {
        $search = $request->search;
        $albums = Album::where('name', 'like', '%' . $search . '%')
            ->orderBy('name')
            ->limit(10)
            ->get();
            
        return AlbumResource::collection($albums);
    }
}
