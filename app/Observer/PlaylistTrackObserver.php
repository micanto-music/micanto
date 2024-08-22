<?php
namespace App\Observer;

use App\Models\Playlist;
use App\Models\PlaylistTrack;

class PlaylistTrackObserver
{

    public function saved( PlaylistTrack $playlistTrack): void
    {
        $this->calculateTrackLength($playlistTrack->playlist_id);
    }

    public function deleted( PlaylistTrack $playlistTrack): void
    {
        $this->calculateTrackLength($playlistTrack->playlist_id);
    }

    private function calculateTrackLength( $playlistId ): void
    {
        $playlist = Playlist::find($playlistId);
        $length = $playlist->tracks->sum('duration');
        $playlist->length = $length;
        $playlist->saveQuietly();
    }

}
