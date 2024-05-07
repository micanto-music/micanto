<?php

namespace App\Providers;

use App\Services\Metadata\SpotifyMetadataService;
use Illuminate\Support\ServiceProvider;
use SpotifyWebAPI\Session as SpotifySession;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->app->bind(SpotifySession::class, static function () {
            return SpotifyMetadataService::enabled()
                ? new SpotifySession(config('micanto.spotify.client_id'), config('micanto.spotify.client_secret'))
                : null;
        });
    }
}
