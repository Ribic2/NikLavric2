<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PosnetkiMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posnetki', function (Blueprint $table){
            $table->bigIncrements('idPosnetki');
            $table->string('naslovPosnetka')->nullable($value = false);
            $table->longText('opisPosnetka');
            $table->string('videoLink');
            $table->string('thumbnail');
            $table->string('naslovPosnetkaApi');
            $table->integer('zaporedje');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
