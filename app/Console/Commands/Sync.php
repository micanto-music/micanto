<?php

namespace App\Console\Commands;

use App\Services\MusicSyncService;
use Illuminate\Console\Command;

class Sync extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'micanto:sync
        {--force : Force resync for all files}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';


    public function __construct(private MusicSyncService $musicSyncService)
    {
        parent::__construct();
    }


    /**
     * Execute the console command.
     */
    public function handle()
    {
        ini_set('max_execution_time', 0);
        $results = $this->musicSyncService->sync($this->option('force'));
        $this->newLine(2);
        $this->components->info('Syncing completed!');

        $this->components->bulletList([
            "<fg=green>{$results['new']}</> new or updated song(s)",
            "<fg=yellow>{$results['skipped']}</> unchanged song(s)",
            "<fg=red>{$results['error']}</> invalid file(s)",
        ]);
    }
}
