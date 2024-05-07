<?php

namespace App\Services;

use App\Exceptions\SpotifyIntegrationDisabledException;
use App\Services\Metadata\SpotifyMetadataService;
use Illuminate\Cache\Repository as Cache;
use SpotifyWebAPI\Session;
use SpotifyWebAPI\SpotifyWebAPI;

/**
 * @method array search(string $keywords, string|array $type, array|object $options = [])
 */
class SpotifyClient
{
    public function __construct(public SpotifyWebAPI $wrapped, private ?Session $session, private Cache $cache)
    {
        if (SpotifyMetadataService::enabled()) {
            $this->wrapped->setOptions(['return_assoc' => true]);
            $this->setAccessToken();
        }
    }

    private function setAccessToken(): void
    {
        $token = $this->cache->get('spotify.access_token');
        if (!$token) {
            $this->session->requestCredentialsToken();
            $token = $this->session->getAccessToken();

            // Spotify's tokens expire after 1 hour, so we'll cache them with some buffer to an extra call.
            $this->cache->put('spotify.access_token', $token, 59 * 60);
        }
        $this->session->setAccessToken($token);
        $this->wrapped->setAccessToken($token);
        $this->wrapped->setSession($this->session);
    }

    public function __call(string $name, array $arguments): mixed
    {
        return $this->wrapped->$name(...$arguments);
    }
}
