<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTagsTable extends Migration {

	public function getTaggedDbArr(){
		$data = [
			'tagging_tags',
			'event_tagging_tags',
			'job_hunt_tagging_tags',
			'opensource_idea_tagging_tags',
			'post_tagging_tags',
			'team_tagging_tags',
			'user_tagging_tags'
		];
		return $data;
	}
	public function up()
	{
		foreach ($this->getTaggedDbArr() as $taggedBdItem) {
			Schema::create($taggedBdItem, function (Blueprint $table) {
				$table->increments('id');
				$table->string('slug', 255)->index();
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
