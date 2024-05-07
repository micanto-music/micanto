<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Arr;
use Laravel\Scout\Searchable;

class Album extends Model
{
    use HasFactory;
    use Searchable;
    protected $guarded = [];

    public const UNKNOWN = 1;

    public function artist(): BelongsTo
    {
        return $this->belongsTo(Artist::class);
    }

    public function tracks(): HasMany
    {
        return $this->hasMany(Track::class);
    }

    public function getCover(): ?string
    {
        return $this->cover ? url('img/covers/' . $this->cover) : null;
    }


    /**
     * Get cover url
     */
    protected function cover(): Attribute
    {
        return Attribute::get(function ($value) {
            return $value ? url('img/covers/'.$value) : null;
        });
    }

    public function toSearchableArray(): array
    {
        $array = [
            'id' => $this->id,
            'name' => $this->name,
        ];


        return [
            'id' => $this->id,
            'name' => $this->name,
            'artist' => $this->artist->name
        ];
    }
}
