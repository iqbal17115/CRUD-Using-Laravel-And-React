<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/contacts','ContactController@index');
Route::post('/contact/create','ContactController@create');
Route::get('/contact/{id}/edit','ContactController@edit');
Route::put('/contact/{id}/update','ContactController@update');
Route::delete('/contact/{id}/delete','ContactController@delete');

