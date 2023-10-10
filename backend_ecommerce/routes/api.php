<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'App\Http\Controllers\backend\AuthController@login');
    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('user', 'App\Http\Controllers\backend\AuthController@user');
    });
});
Route::get('/products', 'App\Http\Controllers\api\ProductController@index');
Route::post('/products', 'App\Http\Controllers\api\ProductController@store');
Route::get('/products/{slug}', 'App\Http\Controllers\api\ProductController@show');
Route::delete('/products/{id}', 'App\Http\Controllers\api\ProductController@destroy');
Route::put('/products/status/{id}', 'App\Http\Controllers\api\ProductController@status');
Route::put('/products/{id}', 'App\Http\Controllers\api\ProductController@update');
Route::get('/products/search/{value}', 'App\Http\Controllers\api\ProductController@search');

Route::get('/categories', 'App\Http\Controllers\api\CategoryController@index');
Route::get('/brands', 'App\Http\Controllers\api\BrandController@index');
Route::get('/categories/{slug}', 'App\Http\Controllers\api\CategoryController@show');

Route::get('/brands/{slug}', 'App\Http\Controllers\api\BrandController@getCategory');
Route::get('/coupon/{code}', 'App\Http\Controllers\api\CouponController@index');
Route::get('/shipping', 'App\Http\Controllers\api\ShippingController@index');
// Route::post('/auth', 'App\Http\Controllers\backend\AuthController@login');


Route::get('/discount/products', 'App\Http\Controllers\api\ProductDiscountController@index');
Route::get('/colors', 'App\Http\Controllers\api\ColorController@index');
Route::post('/upload', 'App\Http\Controllers\api\ImageController@create');