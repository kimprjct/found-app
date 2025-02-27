<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Claimit extends Model
{
    protected $fillable = [
        'image',
        'fullname',
         'name',
        'landMark',
        'userId',
        'found_id',
        'user_id',
        'email',
        'phoneNumber',
        'dateLost',
        'location',
        'itemDescription',
     
    ];


    protected $table = 'claimits'; 

    protected $primaryKey = 'id';

    public function found(){
        return $this->belongsTo(Found::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
