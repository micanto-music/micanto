<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
    public function up(): void
    {
        Schema::create('settings', static function (Blueprint $table): void {
            $table->increments('id');
            $table->string('music_folder')->default('');;
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::drop('settings');
    }
}
