<?php

use App\Http\Controllers\API\AlbumController;
use App\Http\Controllers\API\AlbumsController;
use App\Http\Controllers\API\ArtistController;
use App\Http\Controllers\API\ArtistsController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\PlayerController;
use App\Http\Controllers\API\PlaylistController;
use App\Http\Controllers\API\SearchController;
use App\Http\Controllers\PlayController;
use App\Http\Controllers\API\TrackController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\StartController;
use App\Http\Controllers\API\ProfileController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\SetupController;
use App\Http\Controllers\API\SettingsController;
use App\Http\Controllers\API\DownloadController;
use App\Http\Controllers\API\InteractionController;
use App\Http\Controllers\API\FavoritesController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('loginWithCookie', [AuthController::class, 'loginWithCookie']);
Route::post('login', [AuthController::class, 'login']);
Route::post('setup', [SetupController::class, 'setup']);
Route::get('checkSetup', [SetupController::class, 'checkSetup']);
Route::post('saveSettings', [SettingsController::class, 'saveSettings']);
Route::post('checkSettings', [SettingsController::class, 'checkSettings']);
Route::middleware('auth:sanctum')->group(function () {

    // user routes
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);

    // users routes
    Route::get('/users', [UserController::class, 'index']);
    Route::put('/user', [UserController::class, 'add']);

    Route::post('/profile/{user}', [ProfileController::class, 'update']);

    // start page
    Route::get('overview', [StartController::class, 'index']);

    // music-player interactions for handling song session over devices
    Route::post('player/updateSession', [PlayerController::class, 'updateSession']);
    Route::get('player/play/{track}', [PlayController::class, 'index']);
    Route::post('player/played', [PlayerController::class, 'played']);
    Route::post('player/getQueue', [PlayerController::class, 'getQueue']);

    // tracks
    Route::apiResource('tracks', TrackController::class)->except(['show','destroy']);
    Route::post('tracks', [TrackController::class, 'update']);
    Route::get('syncTracks', [TrackController::class, 'sync']);
    Route::post('tracks/findByIds', [TrackController::class, 'findByIds']);

    // initial data
    Route::get('getAll', [PlayerController::class, 'getAll']);

    // artists
    Route::apiResource('artists', ArtistsController::class)->except(['show','update','store','destroy']);;
    Route::get('/artist/{artist}', [ArtistController::class, 'show']);
    Route::post('/artist/{artist}', [ArtistController::class, 'update']);

    // albums
    Route::apiResource('albums', AlbumsController::class)->except(['show','update','store','destroy']);;
    Route::get('/album/{album}', [AlbumController::class, 'show']);
    Route::post('/album/{album}', [AlbumController::class, 'update']);
    Route::post('/combineAlbums', [AlbumController::class, 'combine']);

    // playlists
    Route::get('playlists', [PlaylistController::class, 'all']);
    Route::get('playlist/{playlist}', [PlaylistController::class, 'show']);
    Route::post('playlist/{playlist}/addItems', [PlaylistController::class, 'addItems']);
    Route::post('playlist/{playlist}/removeItems', [PlaylistController::class, 'removeItems']);
    Route::put('playlist', [PlaylistController::class, 'add']);
    Route::post('playlist/{playlist}', [PlaylistController::class, 'edit']);
    Route::delete('playlist/{playlist}', [PlaylistController::class, 'delete']);

    // search
    Route::get('search', [SearchController::class, 'search']);
    Route::post('searchArtists', [SearchController::class, 'searchArtists']);
    Route::post('searchAlbum', [SearchController::class, 'searchAlbum']);

    // settings
    Route::get('settings', [SettingsController::class, 'getSettings']);

    // like/favorites
    Route::post('like', [InteractionController::class, 'toggleLike']);
    Route::get('favorites', [FavoritesController::class, 'show']);

    // downloads
    Route::get('download/track/{track}', [DownloadController::class, 'track']);
    Route::get('download/album/{album}', [DownloadController::class, 'album']);
    Route::get('download/artist/{artist}', [DownloadController::class, 'artist']);
    Route::get('download/playlist/{playlist}', [DownloadController::class, 'playlist']);
});


