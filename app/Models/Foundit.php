<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Foundit extends Model
{
    protected $fillable = [
        'image',
        'fullname',
         'name',
        'landMark',
        'userId',
        'lost_id',
        'user_id',
        'email',
        'phoneNumber',
        'dateFound',
        'location',
        'itemDescription',
     
    ];


    protected $table = 'foundits'; 

    protected $primaryKey = 'id';

    public function lost(){
        return $this->belongsTo(Lost::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    
}


