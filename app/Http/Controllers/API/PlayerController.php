<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\Player\SetPauseRequest;
use App\Http\Requests\API\Player\UpdateSessionRequest;
use App\Http\Requests\PlayerRequest;
use App\Http\Resources\TrackResource;
use App\Models\ListeningSession;
use App\Models\Track;
use App\Models\Interaction;
use App\Repositories\PlaylistRepository;
use App\Services\QueueService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PlayerController extends Controller
{

    public function __construct(
        private QueueService $queueService,
        private PlaylistRepository $playlistRepository
    )
    {}

    public function play( PlayerRequest $request, Track $track)
    {

    }

    public function getSessionTrack() {

        $session = ListeningSession::where('user_id', Auth::id())->first();
        $track = $session ? TrackResource::make(Track::withData()->where('tracks.id',$session->track_id)->first()): null;

        $resp = new \stdClass();
        $resp->track = $track;
        $resp->session = $session;
        return $resp;
    }

    public function getQueue(Request $request)
    {
        $session = ListeningSession::where('user_id', Auth::id())->first();
        $context = $request->context ?? [];
        $session->context = json_encode($context);
        $session->save();

        return $this->queueService->generateQueue($request->context);
    }

    public function getAll()
    {
        $session = $this->getSessionTrack();
        $context = $session->session ? json_decode($session->session->context, true) : [];

        if(!$context) $context = [];
        $resp = [
            'queue' => $this->queueService->generateQueue($context),
            'session' => $session,
            'playlists' => $this->playlistRepository->getUserPlaylists()
        ];
        return response()->json($resp);
    }


    public function updateSession( UpdateSessionRequest $request)
    {
        $session = ListeningSession::updateOrCreate(
            ['user_id' => Auth::id()],
            ['track_id' => $request->track, 'current_time' => $request->time, 'context' => json_encode($request->context)]
        );
    }

    public function played( Request $request)
    {
        $interaction = Interaction::updateOrCreate(
            [
                'user_id' => Auth::id(),
                'track_id' => $request->track
            ],
            [
                'played_at' => now()
            ]
        );
        ++$interaction->play_count;
        $interaction->save();
    }

}
