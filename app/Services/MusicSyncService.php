<?php

namespace App\Services;

use App\Models\Setting;
use App\Services\Metadata\SpotifyMetadataService;
use Symfony\Component\Finder\Finder;
use getID3;
use SplFileInfo;
use App\Models\Album;
use App\Models\Artist;
use App\Models\Track;
use Illuminate\Support\Arr;

class MusicSyncService
{
    public function __construct(
        private Finder $finder,
        private getID3 $getID3,
        private ImageService $imageService,
        private SpotifyMetadataService $spotifyMetadataService
    ){}

    public function sync(bool $force = false, $newFile = false)
    {
        $settings = Setting::first();
        $musicPath = $settings->music_folder;
        $results = [
            'skipped' => 0,
            'new' => 0,
            'error' => 0
        ];
        $files = $newFile ? [$newFile] : $this->findFiles($musicPath);

        foreach ($files as $file) {
            try {
                $track = Track::where('path', $file->getRealPath())->first();
                if(!$force && $track) {
                    $results['skipped']++;
                    continue;
                }

                $info = $this->extractId3Data($file);
                if(!$info) {
                    $results['error']++;
                    continue;
                }

                // add track
                $data = Arr::except($info, ['album', 'artist', 'albumartist', 'cover']);
                $data['mtime'] = $this->getModifiedTime($file);
                $track = Track::updateOrCreate(['path' => $file], $data);

                // split artists
                $artists = $this->multiexplode([',',' Feat. ',' feat. ', ' feat ',';',' ft. ', '&', '/'], $info['artist']);
                $artistIds = [];

                foreach($artists as $i => $artist) {
                    $artistModel = Artist::firstOrCreate(['name' => trim($artist) ?: 'Unknown']);

                    if($artistModel->name != 'Unknown' && !$artistModel->image) {
                        $spotifyImage = $this->spotifyMetadataService->getArtistImage($artistModel);
                        if($spotifyImage) {
                            $artistImage = $this->imageService->createArtistImage($spotifyImage, 'png', $artistModel);
                            if($artistImage) {
                                $artistModel->image = basename($artistImage);
                                $artistModel->save();
                            }
                        }
                    }


                    // first artist is album artist
                    if($i == 0) {
                        $artistId = $artistModel->id;
                    }

                    $artistIds[] = $artistModel->id;
                }
                // add artists to track
                $track->artists()->sync($artistIds);

                // add album
                $album = Album::firstOrCreate(
                    [
                        'name' => trim($info['album']) ?: 'Unknown Album',
                        'artist_id' => $artistId
                    ],
                    [
                        'name' => trim($info['album']) ?: 'Unknown Album',
                        'artist_id' => $artistId,
                        'year' => $info['year']
                    ]
                );

                if(!$album->cover) {
                    // try to create cover
                    $cover = $this->findAndCreateCover($album, Arr::get($info, 'cover', []), $file);
                    if($cover) {
                        $album->cover = basename($cover);
                        $album->save();
                    }
                }

                $track->album_id = $album->id;
                $track->save();
                $results['new']++;

            } catch (\Throwable) {
                $results['error']++;
            }
        }
        return $results;
    }

    public function multiexplode ($delimiters,$string) {
        $ready = str_replace($delimiters, $delimiters[0], $string);
        $launch = explode($delimiters[0], $ready);
        return  $launch;
    }

    public function extractId3Data($file) {
        $info = [];
        $id3Data = $this->getID3->analyze($file);
        $error = Arr::get($id3Data, 'error.0') ?: (Arr::get($id3Data, 'playtime_seconds') ? null : 'Empty file');
        if($error) return null;

        $this->getID3->CopyTagsToComments($id3Data);

        $tags = array_merge(
            Arr::get($id3Data, 'tags.id3v1', []),
            Arr::get($id3Data, 'tags.id3v2', []),
            Arr::get($id3Data, 'comments', []),
        );

        $comments = Arr::get($id3Data, 'comments', []);

        $cover = [self::getTag($comments, 'cover', null)];

        if ($cover[0] === null) {
            $cover = self::getTag($comments, 'picture', []);
        }

        $lyrics = html_entity_decode(self::getTag($tags, [
            'unsynchronised_lyric',
            'unsychronised_lyric',
            'unsyncedlyrics',
        ]));

        $info['title'] = html_entity_decode(self::getTag($tags, 'title', pathinfo($file, PATHINFO_FILENAME)));
        $info['track'] = (int) self::getTag($tags, ['track', 'tracknumber', 'track_number']);

        // check if title begins with a number
        preg_match('/^\d+([.\-]\s|\s)/',$info['title'], $matches );
        if($matches && $matches[0]) {
            $trackNumber = trim($matches[0]);
            $trackNumber += 0;

            if($info['track'] === 0 && $trackNumber !== 0) {
                $info['track'] = $trackNumber;
            }
        }

        $info['album'] = html_entity_decode(self::getTag($tags, 'album', null));

        $info['path'] = $file;
        $info['cover'] = $cover;
        $info['lyrics'] = $lyrics;
        $info['duration'] = (float) Arr::get($id3Data, 'playtime_seconds');
        $info['artist'] = html_entity_decode(self::getTag($tags, 'artist', null));

        $info['disc'] = (int) self::getTag($tags, ['discnumber', 'part_of_a_set'], 1);
        $info['year'] = (int) self::getTag($tags, 'year') ?: null;
        $info['genre']=  self::getTag($tags, 'genre');

        return $info;
    }

    /**
     * Gather all applicable files in a given directory.
     *
     * @param string $path The directory's full path
     *
     * @return array<SplFileInfo>
     */
    public function findFiles(string $path): array
    {
        return iterator_to_array(
            $this->finder->create()
                ->ignoreUnreadableDirs()
                ->ignoreDotFiles(true)
                ->files()
                ->followLinks()
                ->name('/\.(mp3|wav|ogg|m4a|flac|opus)$/i')
                ->in($path)
        );
    }


    private static function getTag(array $arr, string|array $keys, $default = ''): mixed
    {
        $keys = Arr::wrap($keys);

        for ($i = 0; $i < count($keys); ++$i) {
            $value = Arr::get($arr, $keys[$i] . '.0');

            if ($value) {
                break;
            }
        }

        return $value ?? $default;
    }

    public function findAndCreateCover( Album $album, array $cover = [], $path = '') {
        // first try from id3 tag
        if ($cover) {
            $extension = explode('/', $cover['image_mime']);
            $extension = $extension[1] ?? 'png';
            return $this->imageService->createAlbumImage($cover['data'], $extension, $album);
        }

        // often, there are cover image files in the album folders named cover or folder.jpg|png. Let's take a look
        $file = $path instanceof SplFileInfo ? $path : new SplFileInfo($path);
        $filePath = $file->getRealPath();
        $coverInPath = array_keys(iterator_to_array(
            $this->finder->create()
                ->depth(0)
                ->ignoreUnreadableDirs()
                ->files()
                ->followLinks()
                ->name('/(cov|fold)er\.(jpe?g|png)$/i')
                ->in(dirname($filePath))
        ));

        if(count($coverInPath)) {
            $extension = pathinfo($coverInPath[0], PATHINFO_EXTENSION);
            return $this->imageService->createAlbumImage($coverInPath[0], $extension, $album);
        }

        $spotifyCover = $this->spotifyMetadataService->getAlbumCover($album);
        if($spotifyCover) {
            return $this->imageService->createAlbumImage($spotifyCover, 'png', $album);
        }

        return '';
    }

    public function getModifiedTime(string|SplFileInfo $file): int
    {
        $file = is_string($file) ? new SplFileInfo($file) : $file;

        // getMTime failes sometimes on windows
        try {
            return $file->getMTime();
        } catch (Throwable $e) {
            return time();
        }
    }
}
