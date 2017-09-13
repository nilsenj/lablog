<?php

namespace TagsCloud\Tagging\Providers;

use Illuminate\Support\ServiceProvider;
use TagsCloud\Tagging\Contracts\TaggingUtility;
use TagsCloud\Tagging\Util;

/**
 * Copyright (C) 2014 Robert Conner
 */
class TaggingServiceProvider extends ServiceProvider
{
	/**
	 * Bootstrap the application events.
	 */
	public function boot()
	{
        \Schema::defaultStringLength(191);
		$this->publishes([
			__DIR__.'/../../config/tagging.php' => config_path('tagging.php')
		], 'config');
		
		$this->publishes([
			__DIR__.'/../../migrations/' => database_path('migrations')
		], 'migrations');
	}
	
	/**
	 * Register the service provider.
	 *
	 * @return void
	 */
	public function register()
	{
		$this->app->singleton(TaggingUtility::class, function () {
			return new Util;
		});
	}

	/**
	 * @return array
	 */
	public function provides()
	{
		return [TaggingUtility::class];
	}
}
