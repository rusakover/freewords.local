<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		

		$this->call('PagesSeeder');
		$this->command->info("Таблица типа заполнена!");
	}

}
