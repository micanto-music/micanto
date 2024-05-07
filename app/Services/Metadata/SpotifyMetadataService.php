<?php
namespace App\Services\Metadata;

use App\Models\Album;
use App\Models\Artist;
use App\Services\SpotifyClient;
use Illuminate\Support\Arr;

class SpotifyMetadataService
{
    public function __construct(private SpotifyClient $client)
    {
    }

    public static function enabled(): bool
    {
        return config('micanto.spotify.client_id') && config('micanto.spotify.client_secret');
    }

    public function getArtistImage(Artist $artist): ?string
    {
        if (!static::enabled()) {
            return null;
        }

        if ($artist->name == 'Unknown') {
            return null;
        }

        return Arr::get(
            $this->client->search($artist->name, 'artist', ['limit' => 1]),
            'artists.items.0.images.0.url'
        );
    }

    public function getAlbumCover(Album $album): ?string
    {
        if (!static::enabled()) {
            return null;
        }

        if ($album->name == 'Unknown') {
            return null;
        }

        return Arr::get(
            $this->client->search("{$album->name} artist:{$album->artist->name}", 'album', ['limit' => 1]),
            'albums.items.0.images.0.url'
        );
    }
}
