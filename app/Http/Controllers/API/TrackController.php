<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\TrackResource;
use App\Models\Track;
use App\Repositories\TrackRepository;
use App\Services\TrackService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Http\Requests\API\TrackUpdateRequest;

class TrackController extends Controller
{
    public function __construct(
        private TrackRepository $trackRepository,
        private TrackService $trackService
    ) {}

    public function index(Request $request)
    {
        return TrackResource::collection(
            $this->trackRepository->getSortableList(
                $request->sort ?: 'tracks.title',
                $request->order ?: 'asc'
            )
        );
    }

    public function update(TrackUpdateRequest $request)
    {
        $this->authorize('admin', Auth::user());
        
        $trackIds = $request->validated('tracks');
        $updated = [];
        
        foreach ($trackIds as $trackId) {
            $track = Track::with(['artists', 'album', 'album.artist'])->find($trackId);
            if ($track) {
                $updated[] = $this->trackService->updateTrack($track, $request->validated());
            }
        }

        return response()->json([
            'tracks' => TrackResource::collection($updated)
        ]);
    }

    public function delete(Request $request)
    {
        $this->authorize('admin', Auth::user());
        
        $ids = $request->ids;
        $shouldBackUp = config('micanto.backup_on_delete', false);

        $this->trackService->deleteTracks($ids, $shouldBackUp);

        return response()->noContent();
    }

    public function sync()
    {
        $newCount = $this->trackService->syncTracks();
        
        return response()->json([
            'updated' => $newCount
        ]);
    }

    public function findByIds(Request $request)
    {
        return TrackResource::collection($this->trackRepository->findByIds($request->ids));
    }
}
