<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{

    private $images = [
        '1.png',
        '2.jpg',
        '3.png',
        '4.jpg',
        '5.png',
        '6.jpg',
        '7.png',
        '8.png',
        '9.jpg'
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        factory(\App\Post::class, 50)->create()->each(function(\App\Post $post) use ($faker) {
            $post->image_url = url('images/' . $this->images[$faker->numberBetween(0, 8)]);
            $post->user_id = $faker->numberBetween(1, \App\User::count());
            $post->available = $faker->numberBetween(0, 1);
            $post->save();
        });
    }
}
