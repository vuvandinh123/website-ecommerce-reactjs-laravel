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
Route::get('/products', 'App\Http\Controllers\api\ProductController@index');
Route::get('/products/{id}', 'App\Http\Controllers\api\ProductController@show');
Route::get('/products/search/{value}', 'App\Http\Controllers\api\ProductController@search');

Route::get('/categories', 'App\Http\Controllers\api\CategoryController@index');
Route::get('/categories/{slug}', 'App\Http\Controllers\api\CategoryController@show');

Route::get('/brands/{slug}', 'App\Http\Controllers\api\BrandController@getCategory');
Route::get('/coupon/{code}', 'App\Http\Controllers\api\CouponController@index');
Route::get('/shipping', 'App\Http\Controllers\api\ShippingController@index');


Route::get('/discount/products', 'App\Http\Controllers\api\ProductDiscountController@index');
Route::get('/colors', 'App\Http\Controllers\api\ColorController@index');
Route::get('/sizes', 'App\Http\Controllers\api\SizeController@index');