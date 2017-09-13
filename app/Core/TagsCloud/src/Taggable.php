<?php

namespace TagsCloud\Tagging;

use App\Models\User;
use App\Post;
use TagsCloud\Tagging\Contracts\TaggingUtility;
use TagsCloud\Tagging\Events\TagAdded;
use TagsCloud\Tagging\Events\TagRemoved;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Config;
use TagsCloud\Tagging\Model\PostTagged;
use TagsCloud\Tagging\Model\UserTagged;

trait Taggable
{
    /** @var \TagsCloud\Tagging\Contracts\TaggingUtility * */
    static $taggingUtility;

    /**
     * Temp storage for auto tag
     *
     * @var mixed
     * @access protected
     */
    protected $autoTagTmp;

    /**
     * Track if auto tag has been manually set
     *
     * @var boolean
     * @access protected
     */
    protected $autoTagSet = false;

    /**
     * Boot the soft taggable trait for a model.
     *
     * @return void
     */
    public static function bootTaggable()
    {
        if (static::untagOnDelete()) {
            static::deleting(function ($model) {
                $model->untag();
            });
        }

        static::saved(function ($model) {
            $model->autoTagPostSave();
        });

        static::$taggingUtility = new Util('\TagsCloud\Tagging\Model\\' . (new self())->getShortModelName() . 'Tag');
    }

    /**
     * @param array|null $data
     * @return UserTagged|PostTagged
     */
    public function getTaggedInstance(array $data = null)
    {

        if (strtolower($this->getShortModelName()) == "user") {

            return empty($data) ? new UserTagged() : new UserTagged($data);
        }
        if (strtolower($this->getShortModelName()) == "post") {

            return empty($data) ? new PostTagged() : new PostTagged($data);
        }

    }

    /**get model short name
     * @return string
     */
    public function getShortModelName()
    {
        $reflection = new \ReflectionClass($this);
        return $reflection->getShortName();
    }

    /**
     * Return collection of tagged rows related to the tagged model
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function tagged()
    {
        return $this->morphMany(
            $this->getTaggedRelation(),
            'taggable')->with('tag');
    }

    /**
     * Return collection of tags related to the tagged model
     * TODO : I'm sure there is a faster way to build this, but
     * If anyone knows how to do that, me love you long time.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getTagsAttribute()
    {
        $data = $this->tagged->map(function ($item) {
            return $item->tag;
        });

        if ($this instanceof \App\User) {
            $data = $this->tagged->map(function ($item) {
                $tag = $item->tag;
                $counter = $item->counter->first();
                $tag['counter'] = $counter;
                return $tag;
            });
        }

        return $data;
    }

    /**
     * @param $value
     * @return string
     */
    public function getTagNamesAttribute($value)
    {
        return implode(', ', $this->tagNames());
    }

    /**
     * Perform the action of tagging the model with the given string
     *
     * @param $tagName string or array
     */
    public function tag($tagNames)
    {
        $tagNames = static::$taggingUtility->makeTagArray($tagNames);

        foreach ($tagNames as $tagName) {
            $this->addTag($tagName);
        }
    }

    /**
     * Return array of the tag names related to the current model
     *
     * @return array
     */
    public function tagNames()
    {
        return $this->tagged->map(function ($item) {
            return $item->tag_name;
        })->toArray();
    }

    /**
     * Return array of the tag slugs related to the current model
     *
     * @return array
     */
    public function tagSlugs()
    {
        return $this->tagged->map(function ($item) {
            return $item->tag_slug;
        })->toArray();
    }

    /**
     * Remove the tag from this model
     *
     * @param $tagName string or array (or null to remove all tags)
     */
    public function untag($tagNames = null)
    {
        if (is_null($tagNames)) {
            $tagNames = $this->tagNames();
        }

        $tagNames = static::$taggingUtility->makeTagArray($tagNames);

        foreach ($tagNames as $tagName) {
            $this->removeTag($tagName);
        }

        if (static::shouldDeleteUnused()) {
            static::$taggingUtility->deleteUnusedTags();
        }
    }

    /**
     * Replace the tags from this model
     *
     * @param $tagName string or array
     */
    public function retag($tagNames)
    {
        $tagNames = static::$taggingUtility->makeTagArray($tagNames);
        $currentTagNames = $this->tagNames();

        $deletions = array_diff($currentTagNames, $tagNames);
        $additions = array_diff($tagNames, $currentTagNames);

        $this->untag($deletions);

        foreach ($additions as $tagName) {
            $this->addTag($tagName);
        }
    }

    /**
     * Filter model to subset with the given tags
     *
     * @param $tagNames array|string
     */
    public function scopeWithAllTags($query, $tagNames)
    {
        if (!is_array($tagNames)) {
            $tagNames = func_get_args();
            array_shift($tagNames);
        }

        $tagNames = static::$taggingUtility->makeTagArray($tagNames);

        $normalizer = config('tagging.normalizer');
        $normalizer = $normalizer ?: [static::$taggingUtility, 'slug'];
        $className = $query->getModel()->getMorphClass();

        foreach ($tagNames as $tagSlug) {
            $tags = $this->getTaggedInstance()->where('tag_slug', call_user_func($normalizer, $tagSlug))
                ->where('taggable_type', $className)
                ->lists('taggable_id');

            $primaryKey = $this->getKeyName();
            $query->whereIn($this->getTable() . '.' . $primaryKey, $tags);
        }

        return $query;
    }

    /**
     * @param $query
     * @param $tagNames
     * @return mixed
     */
    public function scopeWithAnyTag($query, $tagNames)
    {
        if (!is_array($tagNames)) {
            $tagNames = func_get_args();
            array_shift($tagNames);
        }

        $tagNames = static::$taggingUtility->makeTagArray($tagNames);

        $normalizer = config('tagging.normalizer');
        $normalizer = $normalizer ?: [static::$taggingUtility, 'slug'];

        $tagNames = array_map($normalizer, $tagNames);
        $className = $query->getModel()->getMorphClass();

        $tags = $this->getTaggedInstance()->whereIn('tag_slug', $tagNames)
            ->where('taggable_type', $className)
            ->lists('taggable_id');

        $primaryKey = $this->getKeyName();
        return $query->whereIn($this->getTable() . '.' . $primaryKey, $tags);
    }

    /**
     * Adds a single tag
     *
     * @param $tagName string
     */
    private function addTag($tagName)
    {
        $tagName = trim($tagName);

        $normalizer = config('tagging.normalizer');
        $normalizer = $normalizer ?: [static::$taggingUtility, 'slug'];

        $tagSlug = call_user_func($normalizer, $tagName);

        $previousCount = $this->tagged()
            ->where('tag_slug', '=', $tagSlug)->take(1)->count();
        if ($previousCount >= 1) {
            return;
        }

        $displayer = config('tagging.displayer');
        $displayer = empty($displayer) ? '\Illuminate\Support\Str::title' : $displayer;

        $tagged = $this->getTaggedInstance(array(
            'tag_name' => call_user_func($displayer, $tagName),
            'tag_slug' => $tagSlug,
        ));

        $tag = $this->tagged()->save($tagged);

        static::$taggingUtility->incrementCount($tagName, $tagSlug, 1);

        unset($this->relations['tagged']);
        event(new TagAdded($this));
    }

    /**
     * Removes a single tag
     *
     * @param $tagName string
     */
    public function removeTag($tagName)
    {
        $tagName = trim($tagName);

        $normalizer = config('tagging.normalizer');
        $normalizer = $normalizer ?: [static::$taggingUtility, 'slug'];

        $tagSlug = call_user_func($normalizer, $tagName);

        if ($count = $this->tagged()->where('tag_slug', '=', $tagSlug)->delete()) {
            static::$taggingUtility->decrementCount($tagName, $tagSlug, $count);
        }

        unset($this->relations['tagged']);
        event(new TagRemoved($this));
    }

    /**
     * Return an array of all of the tags that are in use by this model
     *
     * @return Collection
     */
    public function existingTags()
    {
        return $this->getTaggedInstance()->distinct()
            ->join($this->tagsPrefix . '_tagging_tags', 'tag_slug', '=', $this->tagsPrefix . '_tagging_tags.slug')
            ->where('taggable_type', '=', (new static)->getMorphClass())
            ->orderBy('tag_slug', 'desc')
            ->get(array('tag_slug as slug', 'tag_name as name', $this->tagsPrefix . '_tagging_tags.count as count'));
    }

    /**
     * Should untag on delete
     */
    public static function untagOnDelete()
    {
        return isset(static::$untagOnDelete)
            ? static::$untagOnDelete
            : Config::get('tagging.untag_on_delete');
    }

    /**
     * Delete tags that are not used anymore
     */
    public static function shouldDeleteUnused()
    {
        return Config::get('tagging.delete_unused_tags');
    }

    /**
     * Set tag names to be set on save
     *
     * @param mixed $value Data for retag
     *
     * @return void
     *
     * @access public
     */
    public function setTagNamesAttribute($value)
    {
        $this->autoTagTmp = $value;
        $this->autoTagSet = true;
    }

    /**
     * AutoTag post-save hook
     *
     * Tags model based on data stored in tmp property, or untags if manually
     * set to falsey value
     *
     * @return void
     *
     * @access public
     */
    public function autoTagPostSave()
    {
        if ($this->autoTagSet) {
            if ($this->autoTagTmp) {
                $this->retag($this->autoTagTmp);
            } else {
                $this->untag();
            }
        }
    }
}
