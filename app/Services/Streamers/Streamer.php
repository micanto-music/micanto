<?php

namespace App\Services\Streamers;

use App\Models\Track;

class Streamer
{
    protected ?Track $track = null;

    protected ?string $contentType = null;

    public function __construct()
    {
        // Turn off error reporting to make sure our stream isn't interfered.
        @error_reporting(0);
    }

    public function setTrack(Track $track): void
    {
        $this->track = $track;

        abort_unless(file_exists($this->track->path), 404);

        // Hard code the content type instead of relying on PHP's fileinfo()
        // or even Symfony's MIMETypeGuesser, since they appear to be wrong sometimes.
        $this->contentType = 'audio/' . pathinfo($this->track->path, PATHINFO_EXTENSION);
    }
}
