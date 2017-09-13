<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Post
 * @package App
 */
class Post extends Model
{
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
        'image',
        'user_id',
        'available'
    ];

    /**
     * @var array
     */
    protected $appends = [
        'image_url',
        'created'
    ];

    /**
     * @var array
     */
    protected $with = ['user'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @param $value
     */
    public function setImageAttribute($value)
    {
        if ($value) {
            $this->attributes['image'] = $value;
        } else {
            $this->attributes['image'] = "notfound.jpg";
        }
    }

    /**
     * @return string
     */
    public function getImageUrlAttribute()
    {
        if ($this->image) {
            return url('assets/images/' . $this->image);
        } else {
            return url('assets/images/notfound.jpg');
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
}
