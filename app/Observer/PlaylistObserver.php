<?php
namespace App\Observer;

use App\Models\Playlist;
use App\Services\ImageService;
class PlaylistObserver
{
    public function __construct(
        private ImageService $imageService
    ){}

    public function saved( Playlist $playlist ) {
        // reload cover
//        if (empty($playlist->cover)) {

            $tracks = $playlist->tracks;
            $covers = [];
            foreach($tracks as $track) {
                if($track->album->cover && !in_array($track->album->cover, $covers)) {
                    $covers[] = $track->album->cover;
                }
                if(count($covers) === 4) {
                    break;
                }
            }

            if(count($covers) > 0) {
                $filename = $playlist->id.'cover.jpg';
                $coverDir = public_path(config('micanto.playlist_cover_dir'));
                $target = $coverDir.$filename;
                $this->imageService->combineCovers($covers, $coverDir.$filename);
                $playlist->cover = basename($target);
                $playlist->saveQuietly();
            }


//        }

    }

}
