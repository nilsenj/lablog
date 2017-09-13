Events
============

The `Taggable` trait will fire off two events.

```php
TagsCloud\Tagging\Events\TagAdded;

TagsCloud\Tagging\Events\TagRemoved;
```

You can add listeners and track these events.

```php
\Event::listen(TagsCloud\Tagging\Events\TagAdded::class, function($article){
	\Log::debug($article->title . ' was tagged');
});
```