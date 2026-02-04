<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Laravel\Scout\Searchable;
use App\Builder\TrackBuilder;

class Track extends Model
{
    use Searchable;

    protected $hidden = ['pivot'];
    protected $guarded = [];

    protected $appends = ['fullUrl'];

    private static ?string $musicFolder = null;

    public function artists(): BelongsToMany
    {
        return $this->belongsToMany(Artist::class, 'track_artist', 'track_id', 'artist_id');
    }

    public function album(): BelongsTo
    {
        return $this->belongsTo(Album::class);
    }

    public function newEloquentBuilder($query): TrackBuilder
    {
        return new TrackBuilder($query);
    }

    /**
     * Get the absolute path to the track file.
     * Accessor for $track->path
     */
    protected function path(): Attribute
    {
        return Attribute::get(function ($value) {
            if (!self::$musicFolder) {
                self::$musicFolder = Setting::first()?->music_folder ?? '';
            }

            // Ensure the path is joined correctly
            return rtrim(self::$musicFolder, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . ltrim($value, DIRECTORY_SEPARATOR);
        });
    }

    public function getFullUrlAttribute(): ?string
    {
        return $this->id ? url('/api/player/play/' . $this->id) : null;
    }

    protected function fullUrl(): Attribute
    {
        return Attribute::get(function ($value) {
            return $value ? url('/api/player/play/'.$value) : null;
        });
    }

    /** @return array<mixed> */
    public function toSearchableArray(): array
    {
        $array = [
            'id' => $this->id,
            'title' => $this->title,
        ];

        if($this->album) {
            $array['artist'] = $this->album->artist->name;
        }

        return $array;
    }
}
