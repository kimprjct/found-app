<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', [IndexController::class, 'index'])->name('welcome');
Route::get('/auth/login', [IndexController::class, 'authLogin'])->name('auth.login');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';



Route::middleware(['user'])->group(function () {
  
    Route::get('/user/dashboard', [UserController::class, 'userDashboard'])->name('user.dashboard');
    Route::get('/user/profile', [UserController::class, 'userProfile'])->name('user.profile');

    Route::get('/user/lost', [UserController::class, 'userLost'])->name('user.lost');
    Route::post('/store/lost', [UserController::class,'storeLost'])->name('lost.store'); 
    Route::get('/foundIt/losts/{lost}', [UserController::class, 'foundIt'])->name('user.foundit');
    Route::post('/storeFoundit/losts/{lost}', [UserController::class, 'storeFoundit'])->name('foundit.store'); 
    Route::delete('/foundIt/foundits/{foundit}', [UserController::class, 'destroyFoundit'])->name('foundit.destroy');

    Route::get('/user/found', [UserController::class, 'userFound'])->name('user.found');
    Route::post('/store/found', [UserController::class, 'storeFound'])->name('found.store'); 
    Route::get('/claimIt/founds/{found}', [UserController::class, 'claimIt'])->name('user.claimit');
    Route::post('/storeClaimit/founds/{found}', [UserController::class, 'storeClaimit'])->name('claimit.store'); 
    Route::delete('/claimIt/claimits/{claimit}', [UserController::class, 'destroyClaimit'])->name('claimit.destroy');


    Route::get('/user/notify', [UserController::class, 'userNotify'])->name('user.notify');
});


Route::middleware(['admin'])->group(function () {

    Route::get('/admin/dashboard', [AdminController::class, 'adminDashboard'])->name('admin.dashboard');
    Route::get('/admin/profile', [AdminController::class, 'adminProfile'])->name('admin.profile');
    Route::get('/admin/lost', [AdminController::class, 'adminLost'])->name('admin.lost');
    Route::get('/admin/found', [AdminController::class, 'adminFound'])->name('admin.found');
     Route::get('/admin/claimReq', [AdminController::class, 'adminClaimReq'])->name('admin.claimReq');
     Route::get('/admin/foundReq', [AdminController::class, 'adminFoundReq'])->name('admin.foundReq');
     
     Route::get('/admin/user', [AdminController::class, 'adminUser'])->name('admin.user');
     Route::post('/store', [AdminController::class, 'store'])->name('user.store'); 
     Route::patch('/users/{user}', [AdminController::class, 'updateUser'])->name('user.update'); 
     Route::delete('/users/{user}', [AdminController::class, 'destroyUser'])->name('user.destroy'); 

     Route::get('/admin/history', [AdminController::class, 'adminHistory'])->name('admin.history');


Route::put('claimit/approve/{id}', [AdminController::class, 'approve'])->name('claimit.approve');
Route::put('claimit/reject/{id}', [AdminController::class, 'reject'])->name('claimit.reject');


Route::put('foundit/approve/{id}', [AdminController::class, 'fapprove'])->name('foundit.approve');
Route::put('foundit/reject/{id}', [AdminController::class, 'freject'])->name('foundit.reject');
});
