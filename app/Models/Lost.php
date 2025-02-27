<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lost extends Model
{
        protected $fillable = [
            'user_name',
            'user_id',
            'status',

            'image',
            'name',
            'landMark',
            'contact',
            'dateLost',
            'timeLost',
            'description',
        ];
    
    
        protected $table = 'losts'; 
    
        protected $primaryKey = 'id';
}
