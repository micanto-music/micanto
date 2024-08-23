<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Playlist extends Model
{
    use HasFactory;

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getCover(): ?string
    {
        return $this->cover ? url('img/playlists/' . $this->cover) : null;
    }


    /**
     * Get cover url
     */
    protected function cover(): Attribute
    {
        return Attribute::get(function ($value) {
            return $value ? url('img/playlists/'.$value) : null;
        });
    }

    public function tracks(): BelongsToMany
    {
        return $this->belongsToMany(Track::class)->using(PlaylistTrack::class)->withTimestamps();
    }
}
