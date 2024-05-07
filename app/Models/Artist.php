<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\Searchable;

class Artist extends Model
{
    use HasFactory;
    use Searchable;

    protected $hidden = ['pivot'];
    protected $guarded = [];

    public const UNKNOWN = 1;
    public const COMPILATION = 2;

    public function tracks(): BelongsToMany
    {
        return $this->belongsToMany(Track::class, 'track_artist', 'artist_id', 'track_id');
    }

    public function albums(): HasMany
    {
        return $this->hasMany(Album::class);
    }

    /** @return array<mixed> */
    public function toSearchableArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
        ];
    }

    public function getImage(): ?string
    {
        return $this->image ? url('img/covers/' . $this->image) : null;
    }


    /**
     * Get image url
     */
    protected function image(): Attribute
    {
        return Attribute::get(function ($value) {
            return $value ? url('img/artists/'.$value) : null;
        });
    }
}
