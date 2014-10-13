<?php

class Page extends Eloquent 
{

	public static function getCategory($category) 
	{
		try {

			$category_name = Page::where('category', '=', $category)->firstOrFail();

		} catch (Exception $e) {
			
			return $e;

		}

		return $category_name;

	}

}