<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTaggedTable extends Migration
{
    public function getTaggedDbArr(){
        $data = [
            'tagging_tagged',
            'user_tagging_tagged',
            'post_tagging_tagged'
        ];
        return $data;
    }
    public function up() {

        foreach ($this->getTaggedDbArr() as $taggedBitem) {
            Schema::defaultStringLength(191);
            Schema::create($taggedBitem, function(Blueprint $table) {
                $table->increments('id');
                if(\Config::get('tagging.primary_keys_type') == 'string') {
                    $table->string('taggable_id', 36)->index();
                } else {
                    $table->integer('taggable_id')->unsigned()->index();
                }
                $table->string('taggable_type')->index();
                $table->string('tag_name', 255);
                $table->string('tag_slug')->index();
            });
        }

    }

    /**
     *
     */
    public function down() {
        foreach ($this->getTaggedDbArr() as $taggedBitem) {
            Schema::drop($taggedBitem);
        }

    }
}
