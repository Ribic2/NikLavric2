<?php

Route::get('/videos', 'VideoController@getVideos');
Route::get('/videos/{id}', 'VideoController@getVideo');
Route::post('/login', 'AuthController@login');
