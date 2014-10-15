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
<<<<<<< HEAD
				'title'=>'Сумма прописью',
				'category'=>'summ',
				'body'=>'body3',
				'discription' => 'Для получения суммы прописью заполните поле ниже' ,
				'info'=>'PHP'),
=======
				'title'=>'Транслитерация имен',
				'category'=>'name',
				'url'=>'translate/name',
				'body'=>'body1',
				'discription' => 'Для транслитерации имени заполните поля ниже', 
				'info'=>'PHP Ninga'),

			array(
				'title'=>'Создание паролей',
				'category'=>'pass',
				'url'=>'pass',
				'body'=>'body1',
				'discription' => 'Для создания пароля заполните поля ниже ', 
				'info'=>'PHP Ninga'),

			array(
				'title'=>'Дата прописью',
				'category'=>'date',
				'url'=>'translate/date',
				'body'=>'body2',
				'discription' => 'Для получения даты прописью заполните поля ниже', 
				'info'=>'JS Ninga')
>>>>>>> alexey


		));
	}
}