<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\ToggleLikeRequest;
use App\Models\Interaction;
use App\Models\Track;
use Illuminate\Support\Facades\Auth;

class InteractionController extends Controller
{

    public function toggleLike(ToggleLikeRequest $request)
    {
        return tap(Interaction::query()->firstOrCreate([
            'track_id' => $request->track,
            'user_id' => Auth::id(),
        ]), static function (Interaction $interaction): void {
            $interaction->liked = !$interaction->liked;
            $interaction->save();
        });
    }

}
