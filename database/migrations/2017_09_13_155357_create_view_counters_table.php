<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateViewCountersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('counter', function ($table) {
            $table->increments('id');
            $table->string('class_name');
            $table->integer('object_id');
            $table->integer('view_counter')->unsigned()->default(0);
            $table->index('class_name');
            $table->index('object_id');
            $table->timestamps();
        });
        Schema::create('user_counter', function ($table) {
            $table->increments('id');
            $table->string('class_name');
            $table->integer('object_id');
            $table->integer('user_id');
            $table->string('ip')->default("");
            $table->string('action');
            $table->timestamps();
            $table->index('class_name');
            $table->index('object_id');
            $table->index('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('counter');
        Schema::drop('user_counter');
    }
}
