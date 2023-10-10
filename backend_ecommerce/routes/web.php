<?php

use App\Http\Controllers\backend\AuthController;
use App\Http\Controllers\backend\BrandController;
use App\Http\Controllers\backend\CategoryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\DashboardController;
use App\Http\Controllers\backend\InvoicesController;
use App\Http\Controllers\backend\ProductController;

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
// backend
Route::get('/admin/login',[AuthController::class,'login'])->name('admin.login');
Route::post('/admin/login',[AuthController::class,'postlogin'])->name('admin.postlogin');
Route::prefix('admin')->middleware('loginadmin')->group(function () {

    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/logout', [AuthController::class, 'logout'])->name('admin.logout');
    Route::prefix('product')->group(function () {
        Route::post('{id}/status', [ProductController::class, 'status'])->name('product.status');
        Route::post('{id}/trash', [ProductController::class, 'setTrash'])->name('product.setTrash');
        Route::post('restore', [ProductController::class, 'restore'])->name('product.restore');
        Route::post('destroy', [ProductController::class, 'destroy'])->name('product.destroy');
        Route::get('/trash', [ProductController::class, 'trash'])->name('product.trash');
        Route::post('/deleteAll', [ProductController::class, 'deleteAll'])->name('product.deleteAll');
        Route::post('destroyAll', [ProductController::class, 'destroyAll']);
        Route::get('image/{id}', [ProductController::class, 'image'])->name('product.image');
        Route::post('/validateName', [ProductController::class, 'validateName'])->name('product.validateName');
        Route::put('upload/{id}', [ProductController::class, 'upload'])->name('product.upload');
        Route::put('deleteImage/{id}', [ProductController::class, 'deleteImage'])->name('product.deleteImage');
        Route::post('product/filter',[ProductController::class, 'filter']);
    });
    Route::resource('product', ProductController::class);

    /**
     * route category
     */
    Route::prefix('category')->group(function () {
        Route::get('trash', [CategoryController::class, 'trash'])->name('category.trash');
        Route::post('{id}/status', [CategoryController::class, 'status']);
        Route::post('validateName', [CategoryController::class, 'validateName']);
        Route::post('destroyAll', [CategoryController::class, 'destroyAll']);
        Route::post('destroy', [CategoryController::class, 'destroy']);
        Route::post('deleteAll', [CategoryController::class, 'deleteAll']);
        Route::post('restore', [CategoryController::class, 'restore']);
        Route::post('{id}/trash', [CategoryController::class, 'setTrash']);
    });
    Route::resource('category', CategoryController::class);

    /**
     * route brand
     */
    Route::prefix('brand')->group(function () {
        Route::get('trash', [BrandController::class, 'trash'])->name('brand.trash');
        Route::post('{id}/status', [BrandController::class, 'status']);
        Route::post('validateName', [BrandController::class, 'validateName']);
        Route::post('destroyAll', [BrandController::class, 'destroyAll']);
        Route::post('destroy', [BrandController::class, 'destroy']);
        Route::post('deleteAll', [BrandController::class, 'deleteAll']);
        Route::post('restore', [BrandController::class, 'restore']);
        Route::post('{id}/trash', [BrandController::class, 'setTrash']);
    });
    Route::resource('brand', BrandController::class);

    Route::prefix('invoice')->group(function () {
        Route::get('trash', [InvoicesController::class, 'trash'])->name('invoice.trash');
        Route::post('{id}/status', [InvoicesController::class, 'status']);
        Route::post('validateName', [InvoicesController::class, 'validateName']);
        Route::post('destroyAll', [InvoicesController::class, 'destroyAll']);
        Route::post('destroy', [InvoicesController::class, 'destroy']);
        Route::post('deleteAll', [InvoicesController::class, 'deleteAll']);
        Route::post('restore', [InvoicesController::class, 'restore']);
        Route::post('{id}/trash', [InvoicesController::class, 'setTrash']);
    });
    Route::resource('invoice', InvoicesController::class);
    /**
     * Router post
     */
    Route::prefix('post')->group(function () {
        Route::get('trash', [PostController::class, 'trash'])->name('post.trash');
        Route::post('{id}/status', [PostController::class, 'status']);
        Route::post('validateName', [PostController::class, 'validateName']);
        Route::post('destroyAll', [PostController::class, 'destroyAll']);
        Route::post('destroy', [PostController::class, 'destroy']);
        Route::post('deleteAll', [PostController::class, 'deleteAll']);
        Route::post('restore', [PostController::class, 'restore']);
        Route::post('{id}/trash', [PostController::class, 'setTrash']);
    });
    Route::resource('post', PostController::class);

    Route::prefix('page')->group(function () {
        Route::get('trash', [PageController::class, 'trash'])->name('page.trash');
        Route::post('{id}/status', [PageController::class, 'status']);
        Route::post('validateName', [PageController::class, 'validateName']);
        Route::post('destroyAll', [PageController::class, 'destroyAll']);
        Route::post('destroy', [PageController::class, 'destroy']);
        Route::post('deleteAll', [PageController::class, 'deleteAll']);
        Route::post('restore', [PageController::class, 'restore']);
        Route::post('{id}/trash', [PageController::class, 'setTrash']);
    });
    Route::resource('page', PageController::class);
    /**
     * Router contact
     */
    Route::prefix('contact')->group(function () {
        Route::get('trash', [ContactController::class, 'trash'])->name('contact.trash');
        Route::post('{id}/status', [ContactController::class, 'status']);
        Route::post('validateName', [ContactController::class, 'validateName']);
        Route::post('destroyAll', [ContactController::class, 'destroyAll']);
        Route::post('destroy', [ContactController::class, 'destroy']);
        Route::post('deleteAll', [ContactController::class, 'deleteAll']);
        Route::post('restore', [ContactController::class, 'restore']);
        Route::post('{id}/trash', [ContactController::class, 'setTrash']);
    });
    Route::resource('contact', ContactController::class);

    /**
     * Router menu
     */
    Route::prefix('menu')->group(function () {
        Route::post('position', [MenuController::class, 'position'])->name('menu.position');
        Route::post('pust', [MenuController::class, 'pust'])->name('menu.pust');
        Route::post('editMenu', [MenuController::class, 'editMenu'])->name('menu.editMenu');
        Route::post('editSort', [MenuController::class, 'editSort'])->name('menu.editSort');
    });
    Route::resource('menu', MenuController::class);

    /**
     * Router order
     */
    Route::prefix('order')->group(function () {
        Route::get('trash', [OrderController::class, 'trash'])->name('order.trash');
        Route::post('{id}/status', [OrderController::class, 'status']);
        Route::post('validateName', [OrderController::class, 'validateName']);
        Route::post('destroyAll', [OrderController::class, 'destroyAll']);
        Route::post('destroy', [OrderController::class, 'destroy']);
        Route::post('deleteAll', [OrderController::class, 'deleteAll']);
        Route::post('restore', [OrderController::class, 'restore']);
        Route::post('{id}/trash', [OrderController::class, 'setTrash']);
    });
    Route::resource('order', OrderController::class);

    /**
     * Router order_detail
     */
    Route::prefix('orderdetail')->group(function () {
        Route::get('trash', [OrderdetailController::class, 'trash'])->name('orderdetail.trash');
        Route::post('{id}/status', [OrderdetailController::class, 'status']);
        Route::post('validateName', [OrderdetailController::class, 'validateName']);
        Route::post('destroyAll', [OrderdetailController::class, 'destroyAll']);
        Route::post('destroy', [OrderdetailController::class, 'destroy']);
        Route::post('deleteAll', [OrderdetailController::class, 'deleteAll']);
        Route::post('restore', [OrderdetailController::class, 'restore']);
        Route::post('{id}/trash', [OrderdetailController::class, 'setTrash']);
    });
    Route::resource('orderdetail', OrderdetailController::class);

    /**
     * Router silder
     */
    Route::prefix('slider')->group(function () {
        Route::get('trash', [SliderController::class, 'trash'])->name('slider.trash');
        Route::post('{id}/status', [SliderController::class, 'status']);
        Route::post('validateName', [SliderController::class, 'validateName']);
        Route::post('destroyAll', [SliderController::class, 'destroyAll']);
        Route::post('destroy', [SliderController::class, 'destroy']);
        Route::post('deleteAll', [SliderController::class, 'deleteAll']);
        Route::post('restore', [SliderController::class, 'restore']);
        Route::post('{id}/trash', [SliderController::class, 'setTrash']);
    });
    Route::resource('slider', SliderController::class);

    /**
     * Router topic
     */
    Route::prefix('topic')->group(function () {
        Route::get('trash', [TopicController::class, 'trash'])->name('topic.trash');
        Route::post('{id}/status', [TopicController::class, 'status']);
        Route::post('validateName', [TopicController::class, 'validateName']);
        Route::post('destroyAll', [TopicController::class, 'destroyAll']);
        Route::post('destroy', [TopicController::class, 'destroy']);
        Route::post('deleteAll', [TopicController::class, 'deleteAll']);
        Route::post('restore', [TopicController::class, 'restore']);
        Route::post('{id}/trash', [TopicController::class, 'setTrash']);
    });
    Route::resource('topic', TopicController::class);

    /**
     * Router user
     */
    Route::prefix('user')->group(function () {
        Route::get('trash', [UserController::class, 'trash'])->name('user.trash');
        Route::post('{id}/status', [UserController::class, 'status']);
        Route::post('validateName', [UserController::class, 'validateName']);
        Route::post('destroyAll', [UserController::class, 'destroyAll']);
        Route::post('destroy', [UserController::class, 'destroy']);
        Route::post('deleteAll', [UserController::class, 'deleteAll']);
        Route::post('restore', [UserController::class, 'restore']);
        Route::post('{id}/trash', [UserController::class, 'setTrash']);
    });
    Route::resource('user', UserController::class);
});

Route::get('{slug}', [SiteController::class, 'index'])->name('slug');

