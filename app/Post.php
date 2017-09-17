<?php

namespace App;

use App\Core\Traits\ViewCounterTrait;
use Conner\Likeable\LikeableTrait;
use Illuminate\Database\Eloquent\Model;
use TagsCloud\Tagging\Taggable;

/**
 * Class Post
 * @package App
 */
class Post extends Model
{
    use Taggable;
    use ViewCounterTrait;
    use LikeableTrait;

    /**
     * @var string
     */
    public $tagsPrefix = 'post';
    /**
     * @var string
     */
    protected $table = "posts";
    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'preamble',
        'body',
        'user_id',
        'available',
        'image_url'
    ];

    /**
     * @var array
     */
    protected $appends = [
        'created',
        'view_counter',
        'likes_counter'
    ];

    /**
     * @var array
     */
    protected $with = ['user', 'tagged'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return string
     */
    public function getImageUrlAttribute()
    {
        if (!$this->attributes['image_url']) {
            return asset('images/notfound.jpg');
        }
        return $this->attributes['image_url'];
    }

    /**
     * @param $value
     */
    public function setImageUrlAttribute($value)
    {
        if (!$value) {
            $this->attributes['image_url'] = asset('images/notfound.jpg');
        } else {
            $this->attributes['image_url'] = $value;
        }
    }

    /**
     * @return string
     */
    public function getCreatedAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    /**
     * @param $query
     * @param $user_id
     * @return mixed
     */
    public function scopeUsers($query, $user_id)
    {
        return $query->where('user_id', $user_id);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopePublished($query)
    {
        return $query->where('available', true);
    }

    /**
     * @return string
     */
    public function getTaggedRelation()
    {

        return 'TagsCloud\Tagging\Model\PostTagged';
    }

    /**
     * @return array
     */
    public function addTagsAttribute()
    {
        return $this->tagNames();
    }

    /**
     * get first counter
     */
    public function getViewCounterAttribute()
    {
        return $this->get_counters()->first();
    }

    /**
     * @return mixed
     */
    public function getLikesCounterAttribute()
    {
        return $this->likeCount;
    }
}
