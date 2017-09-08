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
        'body',
        'image',
        'user_id',
        'created'
    ];

    /**
     * @var array
     */
    protected $appends = ['image_url'];

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
        if($this->image) {
            return asset('dist/assets/images/' . $this->image);
        } else {
            return asset('dist/assets/images/notfound.jpg');
        }
    }

    /**
     * @return string
     */
    public function getCreatedAttribute()
    {
        return $this->created_at->diffForHumans();
    }
}
