<?php

namespace App\Services;

use App\Http\Resources\TrackResource;
use App\Models\Track;
use App\Repositories\TrackRepository;

class QueueService
{

    private const MAX_SONGS = 100;

    public function __construct(
        private TrackRepository $trackRepository
    )
    {}

    public function generateQueue($context = [])
    {

        $tracks = [];
        if(count($context) && isset($context['type'])) {
            switch ($context['type']) {
                case 'tracks':
                    $tracks = $this->trackRepository->getByStartIndex($context);
                    break;
                case 'album':
                    $tracks = $this->generateAlbumQueue($context);
                    break;
                case 'artist':
                    $tracks = $this->generateArtistQueue($context);
                    break;
                case 'playlist':
                    $tracks = $this->generatePlaylistQueue($context);
                    break;
                case 'lastPlayed':
                    $tracks = $this->trackRepository->getLastPlayed(100);
                    break;
                case 'mostPlayed':
                    $tracks = $this->trackRepository->getMostPlayed(100);
                    break;
                case 'latestTracks':
                    $tracks = $this->trackRepository->getLastAdded(100);
                    break;
                case 'favorites':
                    $tracks = $this->generateFavoriteQueue($context);
                    break;
                case 'handpicked':
                    $tracks = $this->getHandpickedQueue($context);
                    break;
                case 'search':
//                    $tracks = $this->trackRepository->getLastAdded(100);
                    break;
                default:
                    $tracks = $this->generateRandomQueue();
            }
        } else {
            $tracks = $this->generateRandomQueue();
        }
        return TrackResource::collection($tracks);
    }

    public function generateRandomQueue()
    {
        $tracks = Track::with(['artists:id,name', 'album:id,name,cover'] )
            ->orderBy('tracks.disc')
            ->orderBy('tracks.track')
            ->limit(self::MAX_SONGS)
            ->get();
        return $tracks;
    }

    public function generateAlbumQueue($context)
    {
        $tracks = Track::with(['artists:id,name', 'album:id,name,cover'] )
            ->where('album_id', $context['id'])
            ->orderBy('tracks.disc')
            ->orderBy('tracks.track')
            ->orderBy('tracks.title')
            ->limit(self::MAX_SONGS)
            ->get();

        return $tracks;
    }

    public function generatePlaylistQueue($context)
    {
        return $this->trackRepository->generatePlaylistQueue($context, self::MAX_SONGS);
    }

    public function generateFavoriteQueue($context)
    {
        return $this->trackRepository->generateFavoriteQueue($context, self::MAX_SONGS);
    }

    public function getHandpickedQueue($context)
    {
        $ids = $context['ids'];
        $shuffle = isset($context['options']['shuffle']) && $context['options']['shuffle'] !== false;
        return $this->trackRepository->findByIds($ids, $shuffle);
    }

    public function generateArtistQueue($context)
    {
        $tracks = Track::withData()
            ->whereHas('artists', function($q) use($context) {
                $q->where('artist_id',$context['id']);
            })
            ->orderBy('year', 'desc')
            ->orderBy('albums.name')
            ->orderBy('tracks.disc')
            ->orderBy('tracks.track')
            ->orderBy('tracks.title')
            ->limit(self::MAX_SONGS)
            ->get();

        return $tracks;
    }

}
