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
        Schema::create('tracks', function (Blueprint $table) {
            $table->id();
            $table->integer('album_id')->nullable()->unsigned();
            $table->string('title');
            $table->float('duration');
            $table->text('lyrics');
            $table->text('path');
            $table->integer('track')->nullable();
            $table->integer('mtime');
            $table->integer('disc')->default(1);
            $table->year('year')->nullable();
            $table->string('genre')->default('');
            $table->boolean('explicit')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tracks');
    }
};
