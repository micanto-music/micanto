<?php

namespace App\Console\Commands;

use App\Console\Commands\Traits\AskForPassword;
use App\Exceptions\InstallationFailedException;
use App\Models\Artist;
use App\Models\Setting;
use App\Models\User;
use App\Services\MediaCacheService;
use Illuminate\Console\Command;
use Illuminate\Contracts\Console\Kernel as Artisan;
use Illuminate\Contracts\Hashing\Hasher as Hash;
use Illuminate\Database\DatabaseManager as DB;
use Illuminate\Encryption\Encrypter;
use Illuminate\Support\Str;
use Jackiedo\DotenvEditor\DotenvEditor;
use Psr\Log\LoggerInterface;
use Throwable;

class SetupCommand extends Command
{
    private const DEFAULT_ADMIN_NAME = 'Andre';
    private const DEFAULT_ADMIN_EMAIL = 'andre@micanto.com';
    private const DEFAULT_ADMIN_PASSWORD = 'admin';
    private const NON_INTERACTION_MAX_DATABASE_ATTEMPT_COUNT = 10;

    protected $signature = 'micanto:init';
    protected $description = 'Install or upgrade Music';

    public function __construct(
        private Artisan $artisan,
        private Hash $hash,
        private DB $db,
        private LoggerInterface $logger
    ) {
        parent::__construct();
    }

    public function handle(): int
    {
        $this->alert('Micanto Setup');

        User::query()->create([
            'name' => self::DEFAULT_ADMIN_NAME,
            'email' => self::DEFAULT_ADMIN_EMAIL,
            'password' => $this->hash->make(self::DEFAULT_ADMIN_PASSWORD)
        ]);

        Artist::create([
            'name' => 'unknown',
        ]);

        Artist::create([
            'name' => 'compilation'
        ]);

        return self::SUCCESS;
    }
}
