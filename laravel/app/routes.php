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


// Route::get('/', 'HomeController@index');

Route::any('/', array(
	'as' => 'home',
	'uses' => 'HomeController@index'
	));

// Route::get('translate', 'translateController@index');
// Route::get('translate/{category?}', 'translateController@getPage');
// Route::get('translate/date', 'translateController@date');

// Route::controller('/translate/{category?}', 'translateController');

Route::resource('/translate', 'TranslateController');
Route::resource('/pass', 'PassController');

// Route::get('/pass', function()
// {
//     $html = '<html><body>'
//             . '<p>А это PDF между прочим!!! '
//             . 'ТЫ ЭТО ПОЙМИ.</p>'
//             . '</body></html>';
//     return PDF::load($html, 'A4', 'portrait')->show();
// });


// Route::get('user/{name?}', function($name = 'John')
// {
//     return $name;
// });

