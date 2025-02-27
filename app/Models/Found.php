<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Found extends Model
{
    protected $fillable = [
        'user_name',
        'user_id',
        'status',

        'image',
        'name',
        'landMark',
        'contact',
        'dateFound',
        'timeFound',
        'description',
    ];


    protected $table = 'founds'; 

    protected $primaryKey = 'id';
}
