<?php

class TranslateController extends BaseController {


	public function index()
	{

		return View::make('home');

	}


	public function translateName()
	{
		return View::make('name');
	}


	public function translateDate() 
	{
		return View::make('date');
	}

}