<?php

class PassController extends BaseController {

	public function index() {

		// return View::make('pass');
		$category = 'pass';
		$page = Page::getCategory($category);

		return View::make($page->category)->with('page', $page);

	}




}