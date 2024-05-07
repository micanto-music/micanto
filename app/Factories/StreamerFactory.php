<?php

namespace App\Factories;

use App\Models\Track;
use App\Services\Streamers\DirectStreamerInterface;
use App\Services\Streamers\StreamerInterface;

class StreamerFactory
{
    public function __construct(
        private DirectStreamerInterface $directStreamer
    ) {
    }

    public function createStreamer(
        Track $track
    ): StreamerInterface {
        $this->directStreamer->setTrack($track);
        return $this->directStreamer;
    }
}
