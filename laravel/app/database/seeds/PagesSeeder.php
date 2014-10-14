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
			
			
			array(
				'title'=>'Сумма прописью',
				'category'=>'summ',
				'body'=>'body3',
				'discription' => 'Для получения суммы прописью заполните поле ниже' ,
				'info'=>'PHP'),


		));
	}
}