<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Counter
 * @package App
 */
class Counter extends Model
{
    /**
     * @var string
     */
    protected $table = 'counter';
    /**
     * @var array
     */
    protected $fillable = ['class_name', 'object_id'];
}
