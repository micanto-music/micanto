<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\UserAddRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Contracts\Hashing\Hasher;

class UserController extends Controller
{
    public function __construct(
        private Hasher $hasher)
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
            $filename = $this->imageService->createUserImage($image,$extension,$user);
            $user->image = basename($filename);
        }

        $user->save();
        return new UserResource($user);
    }

}
