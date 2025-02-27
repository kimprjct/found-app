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
        Schema::create('claimits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('found_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('userId');
            $table->string('userName');
            $table->string('userEmail');
            $table->string('userPhone');
            $table->string('status')->default('pending');
            $table->string('name');
            $table->string('landmark');
            
            $table->string('image');
            $table->string('dateLost');
            $table->string('location');
            $table->string('itemDescription');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('claimits');
    }
};
