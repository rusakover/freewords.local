<?php

class PassController extends BaseController {

	public function index() {

		$category = 'pass';
		$page = Page::getCategory($category);

		return View::make($page->category)->with('page', $page);

	}




}