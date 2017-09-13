<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTagsCounterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_counters', function (Blueprint $table) {
            $table->increments('id');
            $table->tinyInteger('counter')->default(1);
            $table->integer('tagged_id')->unsigned();
            $table->foreign('tagged_id')
                ->references('id')
                ->on('user_tagging_tagged')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_counters');
    }
}
