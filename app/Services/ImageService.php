<?php

namespace App\Services;

use App\Models\Album;
use App\Models\Artist;
use App\Models\User;
use Intervention\Image\Constraint;
use Intervention\Image\ImageManager;
use Nette\Utils\Image;

class ImageService
{

    private const MAX_WIDTH = 500;
    private const MAX_HEIGHT = 500;
    private const QUALITY = 80;

    public function __construct(
        private ImageManager $imageManager
    ){}

    private const positionMap = [
        0 => 'top-left',
        1 => 'top-right',
        2 => 'bottom-left',
        3 => 'bottom-right'
    ];

    public function combineCovers($covers, $target) {
        $cover = $this->imageManager->canvas(300,300);
        if(count($covers) == 1) {
            $img = $this->prepareImage($covers[0],300);
            $cover->insert($img);
        } else {
            $covers = array_merge($covers, array_values($covers));
            $covers = array_slice($covers, 0, 4);
            foreach($covers as $i => $co) {
                $img = $this->prepareImage($co);
                $cover->insert($img, self::positionMap[$i]);
            }
        }

        $cover->save($target, self::QUALITY);
    }

    private function prepareImage($img, $size = 150) {
        $img = $this->imageManager->make($img)
            ->fit(
                $size,
                $size
            );
        return $img;
    }

    public function create(object|string $imageData, string $target, array $config = []): void
    {
        $this->imageManager
            ->make($imageData)
            ->resize(
                $config['max_width'] ?? self::MAX_WIDTH,
                null,
                static function (Constraint $constraint): void {
                    $constraint->upsize();
                    $constraint->aspectRatio();
                }
            )->save($target, self::QUALITY);
    }

    public function crop(object|string $imageData, string $target, array $config = []): void
    {
        $this->imageManager
            ->make($imageData)
            ->fit(
                $config['max_width'] ?? self::MAX_WIDTH,
                $config['max_height'] ?? self::MAX_HEIGHT,
                static function (Constraint $constraint): void {
                    $constraint->upsize();
                }
            )
            ->save($target, self::QUALITY);
    }

    public function createAlbumImage( $imageData, $extension, Album $album, $crop = null) {

        $filename = $album->id.'cover.jpg';
        $coverDir = public_path(config('micanto.album_cover_dir'));

        if($crop) {
            $this->cropByUser($imageData, $coverDir.$filename, $crop);
        } else {
            $this->create($imageData, $coverDir.$filename);
        }

        return $filename;
    }

    public function createArtistImage($imageData, $extension, Artist $artist, $crop = null)
    {
        $filename = $artist->id.'cover.jpg';
        $coverDir = public_path(config('micanto.artist_image_dir'));
        if($crop) {
            $this->cropByUser($imageData, $coverDir.$filename, $crop);
        } else {
            $this->crop($imageData, $coverDir . $filename);
        }
        return $filename;
    }

    public function createUserImage($imageData, $extension, User $user, $crop = null)
    {
        $filename = $user->id.'cover.jpg';
        $coverDir = public_path(config('micanto.user_image_dir'));
        if($crop) {
            $this->cropByUser($imageData, $coverDir.$filename, $crop);
        } else {
            $this->crop($imageData, $coverDir.$filename);
        }
        return $filename;
    }

    public function cropByUser(object|string $imageData, string $target, object $crop) {
        $this->imageManager
            ->make($imageData)
            ->crop($crop->width, $crop->height, $crop->x, $crop->y)
            ->save($target, self::QUALITY);
    }
}
