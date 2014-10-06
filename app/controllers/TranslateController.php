<?php

class TranslateController extends BaseController {


	public function index()
	{

		return View::make('home');

	}


	public function name()
	{
		return View::make('name');
	}

}