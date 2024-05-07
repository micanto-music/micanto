<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlaylistTrackTable extends Migration
{
    public function up(): void
    {
        Schema::create('playlist_track', static function (Blueprint $table): void {
            $table->increments('id');
            $table->bigInteger('playlist_id')->unsigned();
            $table->bigInteger('track_id')->unsigned();
            $table->timestamps();
        });

        Schema::table('playlist_track', static function (Blueprint $table): void {
            $table->foreign('playlist_id')->references('id')->on('playlists')->onDelete('cascade');
            $table->foreign('track_id')->references('id')->on('tracks')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::drop('playlist_track');
    }
}
