<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('login', 'LoginController@store');
Route::post('admin-panel', 'cmsController@store');
Route::get('admin-panel', 'cmsController@index');
Route::get('/{any}', 'indexController@index')->where('any', '.*');

Route::get('/home', 'HomeController@index')->name('home');
