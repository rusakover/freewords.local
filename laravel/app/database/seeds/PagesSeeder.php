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
		DB::table('pages')->truncate();

		DB::table('pages')->insert(array(
		// Page::create(array(
			array(
				'title'=>'Транслитерация имен',
				'category'=>'name',
				'body'=>'body1',
				'discription' => 'Для транслитерации имени заполните поля ниже', 
				'info'=>'PHP Ninga'),

			array(
				'title'=>'Создание паролей',
				'category'=>'password',
				'body'=>'body1',
				'discription' => 'Для создания пароля заполните поля ниже ', 
				'info'=>'PHP Ninga'),

			array(
				'title'=>'Дата прописью',
				'category'=>'date',
				'body'=>'body2',
				'discription' => 'Для получения даты прописью заполните поля ниже', 
				'info'=>'JS Ninga')


		));
	}
}