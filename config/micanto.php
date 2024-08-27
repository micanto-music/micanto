<?php

return [
    'media_path' => env('MEDIA_PATH'),

    'backup_on_delete' => env('BACKUP_ON_DELETE', true),
    'album_cover_dir' => 'img/covers/',
    'album_thumbnail_dir' => 'img/thumbnails/',
    'user_image_dir' => 'img/users/',
    'playlist_cover_dir' => 'img/playlists/',
    'artist_image_dir' => 'img/artists/',

    'spotify' => [
        'client_id' => env('SPOTIFY_CLIENT_ID'),
        'client_secret' => env('SPOTIFY_CLIENT_SECRET'),
    ],

    'force_https' => env('FORCE_HTTPS', false),
];
