<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\AlbumResource;
use App\Http\Resources\ArtistResource;
use App\Http\Resources\TrackResource;
use App\Models\Album;
use App\Models\Artist;
use App\Repositories\TrackRepository;
use App\Services\ImageService;
use App\Services\Metadata\SpotifyMetadataService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ArtistController extends Controller
{
    public function __construct(
        private TrackRepository $trackRepository,
        private ImageService $imageService,
        private SpotifyMetadataService $spotifyMetadataService
    )
    {}
    public function show(Artist $artist)
    {
        $albums =  Album::query()
            ->where('albums.artist_id', $artist->id)
            ->orderBy('year', 'desc')
            ->orderBy('name')
            ->get();
        $topTracks = $this->trackRepository->getMostPlayedByArtist($artist,5);
        $featured = $this->trackRepository->getFeaturedByArtist($artist, 5);
        $allTracks = $this->trackRepository->getTracksByArtists($artist);

        return response()->json([
            'artist' => $artist,
            'tracks' => TrackResource::collection($allTracks),
            'topTracks' => TrackResource::collection($topTracks),
            'featured' => TrackResource::collection($featured),
            'albums' => AlbumResource::collection($albums)
        ]);
    }

    public function update(Artist $artist, Request $request)
    {
        $this->authorize('admin', Auth::user());
        if($artist) {
            $dataName = trim($request->name);
            $oldName = $artist->name;
            $artist->name = !empty($dataName) ? $dataName : $artist->name;
            // detect name change, try to get new cover for artist by spotify, but only if no cover is in request
            if( $request->has('image')) {
                $image = $request->image;
                $extension = explode('/', $image->getMimeType());
                $extension = $extension[1] ?? 'png';
                $filename = $this->imageService->createArtistImage($image,$extension,$artist);
                $artist->image = basename($filename);
            } else {

                // if name changed, get new image by spotify
                if($dataName !== $oldName) {
                    // get by spotify
                    $spotifyImage = $this->spotifyMetadataService->getArtistImage($artist);
                    if($spotifyImage) {
                        $artistImage = $this->imageService->createArtistImage($spotifyImage, 'png', $artist);
                        if ($artistImage) {
                            $artist->image = basename($artistImage);
                        }
                    }
                } else {
                    // if only crop changes
                    if( !$request->has('image') && $request->has('crop') && $artist->image) {
                        $image = $artist->image;
                        $extension = pathinfo($image, PATHINFO_EXTENSION) ?? 'png';
                        $crop = json_decode($request->crop);
                        $filename = $this->imageService->createArtistImage($image, $extension, $artist, $crop);
                        $artist->image = basename($filename);
                    }

                }
            }

            $artist->save();
        }

        return ArtistResource::make($artist);
    }
}
