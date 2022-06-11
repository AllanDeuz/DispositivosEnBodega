<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('bodega_dispositivos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('bodega_id');
            $table->unsignedBigInteger('dispositivo_id');

            $table->foreign('bodega_id')->references('id')->on('bodegas')->onDelete('cascade');
            $table->foreign('dispositivo_id')->references('id')->on('dispositivos')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('bodega_dispositivos');
    }
};
