<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Services\ImageService;
use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{

    public function __construct(
        private Hasher $hash,
        private ImageService $imageService
    ){}

    public function update(User $user, Request $request): UserResource
    {
        $currentUser = Auth::user();


        $needPW = $currentUser->is_admin !== 1;
        if($user->id === $currentUser->id && $needPW) {
            $authorize = $this->hash->check($request->password, $user->password);
        }
        if(!$needPW) {
            $authorize = true;
        }

        //$this->authorize('admin', Auth::user());
        if($user && $authorize) {
            if( $request->has('image')) {
                $image = $request->image;
                $extension = explode('/', $image->getMimeType());
                $extension = $extension[1] ?? 'png';
                $crop = json_decode($request->crop);
                $filename = $this->imageService->createUserImage($image, $extension, $user, $crop);
                $user->image = basename($filename);
            } else {
                if( !$request->has('image') && $request->has('crop') && $user->image) {
                    $image = $user->image;
                    $extension = pathinfo($image, PATHINFO_EXTENSION) ?? 'png';
                    $crop = json_decode($request->crop);
                    $filename = $this->imageService->createUserImage($image, $extension, $user, $crop);
                    $user->image = basename($filename);
                }
            }

            $user->name = $request->name;
            $user->email = $request->email;

            if($request->has('new_password')) {

            }

            $user->save();
        }

        return new UserResource($user);
    }

}
