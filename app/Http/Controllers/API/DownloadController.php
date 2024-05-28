<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TrackResource;
use App\Models\Track;
use App\Models\Album;

class DownloadController extends Controller
{

    public function track(Track $track)
    {
        return response()->download($track->path);
    }

    public function album(Album $album)
    {
        return TrackResource::collection($album->tracks);
    }

    public function artist()
    {

    }

    public function playlist()
    {

    }

}
