<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\AlbumResource;
use App\Models\Album;

class AlbumsController extends Controller
{
    public function index()
    {
        $albums =  Album::query()
            ->orderBy('name')
            ->simplePaginate(21);

        return AlbumResource::collection($albums);
    }
}
