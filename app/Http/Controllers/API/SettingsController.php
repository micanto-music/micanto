<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SettingsController extends Controller
{
    public function getSettings(){
        return Setting::first();
    }

    public function saveSettings(Request $request) {
        if($this->checkAuth()) {
            $settings = Setting::firstOrNew();
            if(is_dir($request->music_folder)) {
                $settings->music_folder = $request->music_folder;
                $settings->save();
            }
            return $settings;
        }
        return false;
    }
    public function checkSettings(Request $request) {
        if($this->checkAuth()) {
            // check if folder exists
            if (!$request->music_folder) return response()->json(false);
            return response()->json(is_dir($request->music_folder));
        }
        return response()->json(false);
    }

    private function checkAuth(): bool {
        if(file_exists(public_path().'/FIRST_INSTALL')) return true;
        if(Auth::user()->is_admin == 1) return true;
        return false;
    }
}
