<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group(['middleware' => ['api'], 'as' => 'api.'], function () {
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        $origin = !empty($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : "";
    } else {
        $origin = !empty($_SERVER['HTTP_HOST']) ? "http://" . $_SERVER['HTTP_HOST'] : "";
    }

    if ((\App::environment('local', 'staging') && ($origin == "http://localhost:4200"))
        || $origin == env('CLIENT_URL')) {
        // cors not working from middleware
        header('Access-Control-Allow-Origin:  *');
        header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PATCH, PUT, DELETE');
        header('Access-Control-Allow-Headers:  Content-Type, X-Auth_old-Token, X-CSRF-Token, Origin, Authorization');
    }
    Route::post('/register', [
        'uses' => 'Auth\AuthController@register',
    ]);

    Route::post('/login', [
        'uses' => 'Auth\AuthController@login',
    ]);

    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::get('/user', [
            'uses' => 'UserController@index',
        ]);
        Route::group(['prefix' => 'blog', 'as' => 'blog.'], function () {
            Route::get('/personal', [
                'uses' => 'PostsController@personal',
            ]);
            Route::post('/store', [
                'uses' => 'PostsController@store',
            ]);
            Route::put('/update/{id}', [
                'uses' => 'PostsController@update',
                'middleware' => 'AllowOperatePost'
            ]);
            Route::delete('/{id}', [
                'uses' => 'PostsController@destroy',
                'middleware' => 'AllowOperatePost'
            ]);

            Route::group(['prefix' => 'file', 'as' => 'file.'], function () {
                Route::post('/uploadFile', [
                    'uses' => 'FileUploadController@uploadFile',
                    'as' => 'images'
                ]);
            });
            Route::post('/likeToggle', [
                'uses' => 'LikesController@likesToggle',
                'as' => 'likeToggle'
            ]);
        });
    });
    Route::group(['prefix' => 'blog/file', 'as' => 'blog.file.'], function () {
        Route::get('/images/{day}/{filename}', [
            'uses' => 'FileUploadController@images',
            'as' => 'images'
        ]);
    });
    Route::group(['prefix' => 'blog', 'as' => 'blog.'], function () {
        Route::get('/index', [
            'uses' => 'PostsController@index',
        ]);
        Route::get('/likesModelStatus', [
            'uses' => 'LikesController@likesModelStatus',
            'as' => 'likesModelStatus'
        ]);
        Route::get('/search', [
            'uses' => 'SearchController@search',
            'as' => 'search'
        ]);
        Route::get('/{id}', [
            'uses' => 'PostsController@show',
        ]);
    });
});