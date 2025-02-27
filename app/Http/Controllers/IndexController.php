<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Route;

class IndexController extends Controller
{
    public function index(): Response
    {
       

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
    

        ]);
    }

    public function authLogin(): Response
    {
       
        return Inertia::render('Auth/Login', [
         
        ]);
    }

}
