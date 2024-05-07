<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('track_artist', function (Blueprint $table) {
            $table->id();

            $table->unsignedBiginteger('track_id')->unsigned();
            $table->unsignedBiginteger('artist_id')->unsigned();
            $table->foreign('track_id')->references('id')
                ->on('tracks')->onDelete('cascade');
            $table->foreign('artist_id')->references('id')
                ->on('artists')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('track_artist');
    }
};
