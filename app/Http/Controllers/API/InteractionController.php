<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\ToggleLikeRequest;
use App\Models\Interaction;
use App\Models\Track;
use Illuminate\Support\Facades\Auth;

use App\Http\Resources\TrackResource;

class InteractionController extends Controller
{
    public function toggleLike(ToggleLikeRequest $request)
    {
        $interaction = Interaction::firstOrCreate([
            'track_id' => $request->track,
            'user_id' => Auth::id(),
        ]);

        $interaction->liked = !$interaction->liked;
        $interaction->save();

        $track = Track::withData()->find($request->track);

        return TrackResource::make($track);
    }
}
