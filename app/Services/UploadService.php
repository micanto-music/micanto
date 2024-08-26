<?php

namespace App\Services;

use App\Models\Setting;

class UploadService
{

    public function __construct(private MusicSyncService $musicSyncService)
    {}

    public function upload( $file )
    {
        $settings = Setting::first();
        $savePath = $settings->music_folder.'/MY_UPLOADS/';
        if(!is_dir($savePath)) {
            mkdir($savePath);
        }
        $targetFileName = $file->getClientOriginalName();
        $file->move($savePath, $targetFileName);
        $uploadedFile = new \SplFileInfo($savePath.$targetFileName);
        $this->musicSyncService->sync(false, $uploadedFile);

        return $savePath.$targetFileName;

    }

}
