<?php

class TranslateController extends BaseController {


	public function index()
	{

		return View::make('home');

	}


	public function name()
	{
		return View::make('name')->with('active', 'name');
	}


	public function date() 
	{
		return View::make('date')->with('active', 'date');
	}

}