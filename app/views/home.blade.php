@extends('template.template')

@section('content')
<div class="container">

		<!-- Заголовок страницы -->
			<div class="page-header">
				<h2 class="lettering">Главная страница</h2>
				
				<p class="lead">Для транслитерации заполните одно из полей ниже и нажмите кнопку!</p>

			</div>
</div>	
<div class="container">
			<!-- Форма -->
				<div class="row">
						<div class="col-lg-4 col-md-4">
								<h4 class="lettering">Имена:</h4>
								<div class="form-group">
									<input type="text" class="form-control input-lg" id="nameField" placeholder="Иванов Петр Сергеевич" onblur="translateEN()" autofocus/>
									<span class="help-block">Введите ФИО в необходимой последовательности</span>
								</div>
								<hr/>
								<h4 class="lettering">Сумма прописью:</h4>
								<div class="form-group">
									<!-- <label for="digital">Сумма прописью</label> -->
									<input type="text" class="form-control input-lg" id="summaField" placeholder="Введите цифры">
									<span class="help-block">Введите цифры для транслитерации</span>
								</div>

								<!-- Дополнительное поле Дата --> 
								<hr/>
								<h4 class="lettering">Дата: (διὰ πασῶν 1900-2100)</h4>								
								<div class="form-group">
								<!-- 	<label for="date">Введите дату</label> -->
									<input type="date" class="form-control input-lg" id="dateField" placeholder="Введите отчество" min="1900-01-01" max="2100-01-01">
								</div>

								<hr/>
								<h4 class="lettering source">Язык:</h4>
								<div class="btn-group" data-toggle="buttons">
									<label class="btn btn-primary active">
										<input type="radio" name="options" id="englishCheck" checked> English
									</label>
									<label class="btn btn-primary">
										<input type="radio" name="options" id="russianCheck">Русский
									</label>

								</div>
								<span class="help-block">Выберите язык, на который транслитирировать</span>

						</div><!-- /.col-lg-6 -->
						<div class="col-lg-4 col-md-4">
								
								<!-- СКРЫТЫЙ РАЗДЕЛ, появляется при Результате -->
									<div class="form-group" id="hiddenBlock">
										<h4 class="lettering result">Результат:</h4>
										<p class="lead zub" id="nameResult"></p>
										<span class="help-block">Используйте это написание при переводе, чтобы соблюсти стандарты транслитерации в России</span>
										<p class="lead zub" id="summaResult"></p>
										<p class="lead zub" id="dateResult"></p>
									</div>
								<!--  -->
						</div>
							<div class="col-lg-offset-4 col-md-offset-4"></div>
					</div> <!--row-->

					<!-- Кнопка -->
					<br/>
					<div class="row">
						<div class="col-lg-4 col-md-4">
							<div class="form-actions">
							<input id="send" type="button" class="butn"  value="Транслит" onclick="datePropisRU()">
						</div>
						<div class="col-lg-offset-8 col-md-offset-8"></div>
						<hr/>  	
						
						</div>
					</div><!-- /.row -->
</div><!-- /.container -->

@stop
