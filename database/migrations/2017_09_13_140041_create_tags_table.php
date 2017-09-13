<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTagsTable extends Migration
{
    public function getTaggedDbArr(){
        $data = [
            'tagging_tags',
            'user_tagging_tags',
            'post_tagging_tags'
        ];
        return $data;
    }
    public function up()
    {
        foreach ($this->getTaggedDbArr() as $taggedBdItem) {
            Schema::defaultStringLength(191);
            Schema::create($taggedBdItem, function (Blueprint $table) {
                $table->increments('id');
                $table->string('slug')->index();
                $table->string('name', 255);
                $table->boolean('suggest')->default(false);
                $table->integer('count')->unsigned()->default(0); // count of how many times this tag was used
            });
        }
    }

    public function down()
    {
        foreach ($this->getTaggedDbArr() as $taggedBdItem) {
            Schema::drop($taggedBdItem);
        }
    }
}
