<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('pages', function($table)
		{
			$table->increments('id');
			$table->string('menu_id', 50);		
			$table->string('category', 50);		
			$table->string('title', 150);
			$table->string('discription', 250);
			$table->text('body');
			$table->text('info');
			$table->string('seo_content', 250);
			$table->string('seo_title', 150);
			$table->string('seo_keywords', 200);
			$table->timestamps();

		}
		
		);
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('pages');
	}

}
