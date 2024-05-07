<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{

    protected $guarded = [];

    protected $casts = ['value' => 'json'];

    public static function get(string $key): mixed
    {
        return self::find($key)?->value;
    }
}
