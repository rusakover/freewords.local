@extends('template.template')

@section('content')
<div class="container">
	<!-- Форма -->
	<div class="row">

		<div class="col-sm-6 col-md-4 col-xs-11">
			<div class="infobox stabilo">
			<h3 class="lettering">Языковые сервисы</h3>
			<p>
				На сайте собраны бесплатные сервисы и инструменты для работы с текстом и иностранными языками.
			</p>
			</div>
		</div>

			<div class="col-sm-6 col-md-4 col-xs-11">
				<div class="whitebox stabilo">
					<h3 class="lettering">
						<a href="translate/name">Имена&nbsp;&#8594;</a>
					</h3>
					<p><i>Сервис транслитерации имени на несколько языков и разных стандартов</i> 
					</p>
				</div>
			</div>

			<div class="col-sm-6 col-md-4 col-xs-11">
				<div class="whitebox stabilo">
					<h3 class="lettering">
						<a href="translate/date">Дата прописью&nbsp;&#8594;</a>
					</h3>
					<p> <i>Перевод числовой даты в дату прописью на несколько языков</i>
					</p>
				</div>
			</div>

			<div class="col-sm-6 col-md-4 col-xs-11">
				<div class="whitebox stabilo">
				<h3 class="lettering">
					<a href="translate/name">Сумма прописью&nbsp;&#8594;</a>
				</h3>
				<p>
					<i>Транслитерация чисел на несколько языков и разных стандартов</i>
				</p>
				</div>
			</div>

			<div class="col-sm-6 col-md-4 col-xs-11 ">
				<div class="whitebox stabilo">
				<h3 class="lettering">
					<a href="translate/date">Дата прописью&nbsp;&#8594;</a>
				</h3>
				<p>
					<i>Перевода числовой даты в дату прописью на несколько языков</i>
				</p>
				</div>
			</div>

		</div>

		<!-- 
<hr>
		<p>
			<a href="translate/date" class="btn btn-default btn-xs " role="button">&#8594;</a>
		</p>
		-->
	</div>
	<!-- /.container -->
@stop

