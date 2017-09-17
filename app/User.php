<?php

namespace App;

use Conner\Likeable\LikeableTrait;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use TagsCloud\Tagging\Taggable;

class User extends Authenticatable
{
    use Notifiable;
    use Taggable;
    use LikeableTrait;

    public $tagsPrefix = 'user';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Hash the users password
     *
     * @param $value
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = \Hash::make($value);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function post()
    {
        return $this->hasMany(Post::class, 'user_id');
    }

    /**
     * @return string
     */
    public function getTaggedRelation(){

        return 'TagsCloud\Tagging\Model\UserTagged';
    }
}
