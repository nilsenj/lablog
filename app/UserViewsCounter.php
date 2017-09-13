<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserViewsCounter extends Model
{
    protected $table = 'user_counter';
    protected $fillable = ['class_name', 'object_id', 'user_id', 'action', 'ip'];
}
