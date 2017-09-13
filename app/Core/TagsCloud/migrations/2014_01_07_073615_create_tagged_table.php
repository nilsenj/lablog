<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTaggedTable extends Migration {

	public function getTaggedDbArr(){
		$data = [
			'tagging_tagged',
			'event_tagging_tagged',
			'job_hunt_tagging_tagged',
			'opensource_idea_tagging_tagged',
			'post_tagging_tagged',
			'team_tagging_tagged',
			'user_tagging_tagged'
		];
		return $data;
	}
	public function up() {

		foreach ($this->getTaggedDbArr() as $taggedBitem) {
			Schema::create($taggedBitem, function(Blueprint $table) {
                $table->charset = 'utf8';
                $table->collation = 'utf8_unicode_ci';
				$table->increments('id');
				if(\Config::get('tagging.primary_keys_type') == 'string') {
					$table->string('taggable_id', 36)->index();
				} else {
					$table->integer('taggable_id')->unsigned()->index();
				}
				$table->string('taggable_type', 255)->index();
				$table->string('tag_name', 255);
				$table->string('tag_slug', 255)->index();
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
