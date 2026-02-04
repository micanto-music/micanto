<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function loginWithCookie(LoginRequest $request)
    {
        $user = $this->verifyCredentials($request->validated());

        if (!$user) {
            return response()->json(['message' => 'Email or password is incorrect!'], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;
        $cookie = cookie('token', $token, 365 * 60 * 24); // 1 year

        return response()->json([
            'user' => new UserResource($user),
        ])->withCookie($cookie);
    }

    public function login(LoginRequest $request)
    {
        $user = $this->verifyCredentials($request->validated());

        if (!$user) {
            return response()->json(['message' => 'Email or password is incorrect!'], 401);
        }

        $deviceName = $request->input('device_name', 'auth_token');

        return response()->json([
            'token' => $user->createToken($deviceName)->plainTextToken
        ]);
    }

    private function verifyCredentials(array $data): ?User
    {
        $user = User::where('email', $data['email'])->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return null;
        }

        return $user;
    }

    // logout a user method
    public function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();

        $cookie = cookie()->forget('token');

        return response()->json([
            'message' => 'Logged out successfully!'
        ])->withCookie($cookie);
    }

    // get the authenticated user method
    public function user(Request $request) {
        return new UserResource($request->user());
    }
}
