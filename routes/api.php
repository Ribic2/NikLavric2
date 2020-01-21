<?php

use Illuminate\Http\Request;

Use App\posnetki;

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

Route::get('posnetki', function(){
    return Posnetki::all();
});

Route::get('posnetki/{id}', function($id) {
    return Posnetki::find($id);
});
