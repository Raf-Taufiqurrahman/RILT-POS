<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'apps', 'as' => 'apps.', 'middleware' => ['auth']], function(){
    // dashboard route
    Route::get('/dashboard', App\Http\Controllers\Apps\DashboardController::class);
    // category route
    Route::resource('/category', App\Http\Controllers\Apps\CategoryController::class);
    // product route
    Route::resource('/product', App\Http\Controllers\Apps\ProductController::class);
    // customer route
    Route::resource('/customer', App\Http\Controllers\Apps\CustomerController::class);
    // permission route
    Route::get('/permission', App\Http\Controllers\Apps\PermissionController::class);
    // role route
    Route::resource('/role', App\Http\Controllers\Apps\RoleController::class);
    // user orute
    Route::resource('/user', App\Http\Controllers\Apps\UserController::class);
});
