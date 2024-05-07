<?php

namespace App\Services\Streamers;

use App\Models\Track;

interface StreamerInterface
{
    public function setTrack(Track $track): void;

    public function stream();
}
