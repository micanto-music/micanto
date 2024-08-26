<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\UploadRequest;
use App\Services\UploadService;
use Illuminate\Support\Facades\Auth;

class UploadController extends Controller
{

    public function upload(
        UploadRequest $request,
        UploadService $uploadService,
    )
    {
        $this->authorize('admin', Auth::user());
        $path = false;
        if ($request->file('file')) {
            $path = $uploadService->upload($request->file('file'));
        }

        return response()->json([
            'path' => $path
        ]);
    }
}
