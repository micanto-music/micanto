<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PlaylistResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'user_id' => $this->user_id,
            'length' => $this->length,
            'cover' => $this->cover,
            'tracks_count' => $this->whenCounted('tracks'),
            'artists' => $this->when(isset($this->artists), $this->artists),
            'covers' => $this->when(isset($this->covers), $this->covers),
        ];
    }
}
