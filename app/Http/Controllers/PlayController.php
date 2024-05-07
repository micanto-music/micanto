<?php

namespace App\Http\Controllers;

use App\Factories\StreamerFactory;
use App\Http\Requests\PlayerRequest;
use App\Http\Resources\TrackResource;
use App\Models\Track;
use App\Repositories\TrackRepository;
use DaveRandom\Resume\FileResource;
use DaveRandom\Resume\InvalidRangeHeaderException;
use DaveRandom\Resume\NonExistentFileException;
use DaveRandom\Resume\RangeSet;
use DaveRandom\Resume\ResourceServlet;
use DaveRandom\Resume\SendFileFailureException;
use DaveRandom\Resume\UnreadableFileException;
use DaveRandom\Resume\UnsatisfiableRangeException;
use Symfony\Component\HttpFoundation\Response;
use function DaveRandom\Resume\get_request_header;

class PlayController extends Controller
{

    public function __construct(private StreamerFactory $streamerFactory)
    {
    }

    public function index( PlayerRequest $request, Track $track)
    {
        return $this->streamerFactory
            ->createStreamer($track)
            ->stream();
    }
}
