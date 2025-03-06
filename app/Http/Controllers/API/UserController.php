<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\UserAddRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Services\ImageService;
use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct(
        private Hasher $hasher,
        private ImageService $imageService
    )
    {}

    public function index()
    {
        $users =  User::all();

        return UserResource::collection($users);
    }

    public function add(UserAddRequest $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $this->hasher->make($request->password);

        if( $request->has('image')) {
            $image = $request->image;
            $extension = explode('/', $image->getMimeType());
            $extension = $extension[1] ?? 'png';
            $crop = json_decode($request->crop);
            $filename = $this->imageService->createUserImage($image,$extension,$user,$crop);
            $user->image = basename($filename);
        }

        $user->save();
        return new UserResource($user);
    }

    public function delete(User $user)
    {
        $this->authorize('admin', Auth::user());
        $user->delete();
        return response()->noContent();
    }

}
