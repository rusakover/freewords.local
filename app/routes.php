<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

// Route::get('/', function()
// {
// 	return View::make('hello');
// });


Route::get('/', 'HomeController@index');
Route::get('translate', 'ServiceController@index');
Route::get('translate/name', 'translateController@name');
// Route::get('translate/date', 'translateController@date');

Route::get('translate/date', array('as' => 'date',
                                 'uses' => 'translateController@date'));

