<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TagsCloud\Tagging\Model\UserTagged;

class UserCounter extends Model
{
    protected $table = 'user_counters';

    protected $fillable = [
        'counter',
        'tagged_id'
    ];

    /**
     * @return mixed
     */
    public function tagged() {
        return $this->belongsTo(UserTagged::class, 'tagged_id');
    }
}
