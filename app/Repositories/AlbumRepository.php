<?php

namespace App\Repositories;

use App\Models\Album;


class AlbumRepository extends Repository
{
    public function getLastAdded(int $count = 7)
    {
        return Album::query()->orderByDesc('created_at')->limit($count)->get();
    }
}
