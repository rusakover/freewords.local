<?php

class PagesSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();
// $table->increments('id');
// 			$table->string('category', 50);
// 			$table->string('url', 250);			
// 			$table->string('title', 150);
// 			$table->text('body');
// 			$table->text('info');
// 			$table->string('seo_content', 250);
// 			$table->string('seo_title', 150);
// 			$table->string('seo_keywords', 200);
// 			$table->timestamps();
		DB::table('pages')->insert(array(
		// Page::create(array(
			array('title'=>'title1','body'=>'body1','info'=>'PHP Ninga'),
			array('title'=>'title2','body'=>'body2','info'=>'JS Ninga'),
			array('title'=>'title3','body'=>'body3','info'=>'Jquery Ninga'),
			array('title'=>'title4','body'=>'body4','info'=>'Not Ninga'),
			array('title'=>'title5','body'=>'body5','info'=>'HTML Ninga')
		));
	}
}