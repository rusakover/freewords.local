@extends('template.template')

@section('content')

<div class="container">

		<!-- Заголовок страницы -->
		<div class="page-header">
			<div class="row">
				<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
					<h2 class="lettering">дата прописью</h2>
				<p class="lead">Для транслитерации заполните поля ниже</p>
				</div>
				<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<h3><a href="#"><i class="fa fa-heart-o"></i></a></h3>
				</div>	
			</div>
			
		</div>
		<!-- Форма -->
		<div class="row">
			<div class="col-lg-4 col-md-4 col-sm-12">
				<div class="form-group">
					<div class="row">
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<h4 class="lettering">дата</h4>
						</div>
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<h4 class="small pull-right"><p class="a"><a id="now">Cегодня</a> <i class="fa fa-level-down"></i>
</p></h4>
						</div>
					</div>
				<input type="date" class="form-control input-lg" id="dateField" autofocus/ >
				<span class="help-block">Введите дату в формате ДД.ММ.ГГГГ</span>
			</div>
			<div class="form-group">
				<h4 class="lettering source">язык:</h4>
				<div class="btn-group" data-toggle="buttons">
					<label class="btn btn-primary active">
						<input type="radio" name="options" id="englishCheck" checked>Английский</label>
					<label class="btn btn-primary">
						<input type="radio" name="options" id="deutscheCheck">Немецкий</label>
					<label class="btn btn-primary">
						<input type="radio" name="options" id="russianCheck">Русский</label>
				</div>
				<span class="help-block">Язык, на который необходима транслитерация</span>
			</div>
		</div>
		<!-- /.col-lg-6 -->
		<div class="col-lg-4 col-md-4 col-sm-6">

			<!-- СКРЫТЫЙ РАЗДЕЛ, появляется при Результате -->
			<div class="form-group" id="hiddenBlock">
				<div class="row">
					<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<h4 class="lettering result">Результат:</h4>	
					</div>
					<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<h5><a href="#" alt="Отправить результат"><i class="fa fa-share pull-right"></i></a></h5>
					</div>
				</div>


				
				<div class="zub">
					<!--____________________ Блок Зубчики -->
					<div class="primary british">
						<span class="help-block"><i>Международный английский:</i>
						</span>
						<p class="lead big" id="dateResult"></p>
					</div>
					<div>
						<span class="help-block"> <i>Американский английский:</i>
						</span>
						<p class="lead" id="">IVANOV PEOTER</p>
						
					</div>
				</div>
				<!-- /зубчкики -->
				<span class="help-block">
					Используйте первое написание при переводе, для соблюдения стандартов транслитерации в России
				</span>
			</div>
			<!--  -->
		</div>
		<div class="col-lg-4 col-md-4 col-sm-6"><h4 class="lettering">Помощь</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ad porro excepturi dignissimos, ea, eligendi <a href="#">provident</a> eius aspernatur perferendis et, consequuntur quidem earum quod. Animi excepturi dolor quo alias necessitatibus.</p><hr>
		<h5 class="lettering">Lorem ipsum dolor sit.</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ad porro excepturi dignissimos, ea, eligendi provident euidem earum quod. Animi excepturi dolor quo alias necessitatibus.</p><hr>
		<h5 class="lettering">Lorem dolor sit</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ad porro excepturi dignissimos, ea, eligendimi excepturi dolor quo alias necessitatibus.</p>
		</div>
	</div>
	<!--row-->

	<!-- Кнопка -->
	<!-- <div class="row">
		<div class="col-lg-4 col-md-6">
			<div class="form-actions">
				<input id="send" type="submit" class="butn" value="Транслит"></div>
			<div class="col-lg-offset-8 col-md-offset-6"></div>
			<hr/>

		</div>
	</div> --> <!-- /.row -->
</div><!-- /.container -->

@stop