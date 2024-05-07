<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArtistResource;
use App\Models\Artist;

class ArtistsController extends Controller
{
    public function index()
    {
        $artists =  Artist::query()
            ->whereNot('name','=','compilation')
            ->whereNot('name','=','unknown')
            ->orderBy('name')
            ->simplePaginate(21);

        return ArtistResource::collection($artists);
    }
}
