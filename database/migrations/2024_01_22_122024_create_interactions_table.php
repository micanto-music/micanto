<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInteractionsTable extends Migration
{
    public function up(): void
    {
        Schema::create('interactions', static function (Blueprint $table): void {
            $table->increments('id');
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('track_id')->unsigned();
            $table->integer('play_count')->default(0);
            $table->timestamp('played_at')->nullable();
            $table->timestamps();
        });

        Schema::table('interactions', static function (Blueprint $table): void {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('track_id')->references('id')->on('tracks')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::drop('interactions');
    }
}
