<?php

class TranslateController extends BaseController {

	public function index() // Вызывается по умолчанию, если не задан параментр после /translate
	{
		
		return Redirect::action('home');

	}

	public function show($category) // Вызывается только если задан параментр после /translate/параметр
	{

		$page = Page::getCategory($category);

		if ($page instanceof Exception) // если ошибка то редирект на главную

		{
			
			return Redirect::action('home');

		}

		return View::make($page->category)->with('page', $page);

	}

	// public function getPage($category)
	// {

	// 	$page = Page::getCategory($category);

	// 	if ($page instanceof Exception) 
	// 	{
			
	// 		return 'Ошибка 404';
	// 	}

	// 	return View::make($page->category)->with('page', $page);

	// }


	// public function getIndex($category) 
	// {

	// 	return $category;
	
	// }
	// public static function toView()
	// {

		
	// 	View::make('name')->with('active', 'date');
	// }


	// public function date() 
	// {
	// 	return View::make('date')->with('active', 'date');
	// }

}