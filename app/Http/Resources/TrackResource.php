<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TrackResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array {
        return [
            'type'      => 'tracks',
            'url'       => $this->fullUrl,
            'id'        => $this->id,
            'title'     => $this->title,
            'cover'     => $this->album->cover,
            'album'     => $this->album->name,
            'album_id'  => $this->album->id,
            'duration'  => $this->duration,
            'track'     => $this->track,
            'disc'      => $this->disc,
            'year'      => $this->year,
            'explicit'  => $this->explicit,
            'genre'     => $this->genre,
            'lyrics'    => $this->lyrics,
            'artists'   => $this->artists,
            'liked'     => (bool) $this->liked,
            'added_at'  => $this->created_at ?? null
        ];
    }
}
