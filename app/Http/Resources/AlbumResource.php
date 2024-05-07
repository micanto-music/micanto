<?php
namespace App\Http\Resources;

use App\Models\Album;
use Illuminate\Http\Resources\Json\JsonResource;
class AlbumResource extends JsonResource
{
    public function __construct(private Album $album)
    {
        parent::__construct($album);
    }

    /** @return array<mixed> */
    public function toArray($request): array
    {
        return [
            'type' => 'albums',
            'id' => $this->album->id,
            'name' => $this->album->name,
            'artist' => [
                'id' => $this->album->artist->id,
                'name' => $this->album->artist->name
            ],
            'cover' => $this->album->cover,
            'is_compilation' => $this->is_compilation,
            'is_single' => $this->is_single,
            'year' => $this->album->year,
            'created_at' => $this->album->created_at,
        ];
    }
}
