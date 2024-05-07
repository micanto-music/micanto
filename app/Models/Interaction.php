<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Interaction extends Model
{
    use HasFactory;

    protected $casts = [
        'liked' => 'boolean',
        'play_count' => 'integer',
    ];

    protected $guarded = ['id'];
    protected $hidden = ['id', 'user_id', 'created_at', 'updated_at', 'last_played_at'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function track(): BelongsTo
    {
        return $this->belongsTo(Track::class);
    }
}
