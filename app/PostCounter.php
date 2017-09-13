<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TagsCloud\Tagging\Model\PostTagged;

class PostCounter extends Model
{
    protected $table = 'post_counters';

    protected $fillable = [
        'counter',
        'tagged_id'
    ];

    /**
     * @return mixed
     */
    public function tagged() {
        return $this->belongsTo(PostTagged::class, 'tagged_id');
    }
}
