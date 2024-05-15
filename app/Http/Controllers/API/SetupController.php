<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Artist;
use App\Models\User;
use Illuminate\Contracts\Hashing\Hasher as Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class SetupController extends Controller
{

    public function __construct(
        private Hash $hash,
    ){}

    public function checkSetup()
    {
        try {
            DB::connection()->getPDO();
            DB::connection()->getDatabaseName();
            return 200;
        } catch (\Exception $e) {
            // no db, thats great, as we want to setup it right now!
        }

        return file_exists(public_path('FIRST_INSTALL')) ? 200 : 404;
    }

    public function setup(Request $request) {
        $page = $request->page;

        switch($page) {
            case 1:
                $res = $this->setupDB($request);
                break;
            case 3:
                $res = $this->setupAdmin($request);
                File::delete(public_path('FIRST_INSTALL'));
                break;
        }

        return response()->json($res);

    }

    private function setupDB(Request $request) {
        try {
            $dsn = "mysql:host=$request->host;port=$request->port;dbname=$request->dbname;charset=UTF8";
            $pdo = new \PDO($dsn, $request->user, $request->password);
            if($pdo) {

                $replaces = [
                    'DB_HOST' => $request->host,
                    'DB_PORT' => $request->port,
                    'DB_DATABASE' => $request->dbname,
                    'DB_USERNAME' => $request->user,
                    'DB_PASSWORD' => $request->password
                ];

                foreach($replaces as $key => $replace) {
                    file_put_contents(app()->environmentFilePath(),
                        str_replace($key . '='. env($key),
                            $key . '=' . $replace,file_get_contents(app()->environmentFilePath())));
                }

                Artisan::call('migrate --force');

                Artist::firstOrCreate([
                    'name' => 'unknown',
                ]);

                Artist::firstOrCreate([
                    'name' => 'compilation'
                ]);


                return true;
            }
        } catch (\PDOException $e) {
            return false;
        }

    }

    private function setupAdmin(Request $request) {
        User::query()->create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $this->hash->make($request->password),
            'is_admin' => true
        ]);

        return true;

    }

}
