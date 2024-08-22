<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class PlaylistTrack extends Pivot
{
    protected $table = 'playlist_track';
}
