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
            'cover'     => $this->album?->cover,
            'album'     => $this->album?->name,
            'album_id'  => $this->album?->id,
            'duration'  => (float) $this->duration,
            'track'     => (int) $this->track,
            'disc'      => (int) $this->disc,
            'year'      => $this->year,
            'explicit'  => (bool) $this->explicit,
            'genre'     => $this->genre,
            'lyrics'    => $this->lyrics,
            'artists'   => ArtistResource::collection($this->whenLoaded('artists')),
            'liked'     => (bool) $this->liked,
            'play_count'=> (int) $this->play_count,
            'added_at'  => $this->created_at ? $this->created_at->toDateTimeString() : null
        ];
    }
}
