<!DOCTYPE html>
<html lang="ru-RU">
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Freewords.ru — стандарт транслитерации!</title>

	<!-- Bootstrap -->

	{{ HTML::style('css/bootstrap.css'); }}
	{{ HTML::style('css/style.css'); }}

	<link rel="shortcut icon" href="favicon.png">

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
	</head>
	<body>
	<div class="container">
			<a href="/" class="navbar-brend pull-left"> 
			{{ HTML::image('img/logo.gif', 'freewords.ru — сервис транслитерации', ['class'=>'logo'] ); }}		
			<!-- код выше Добавляет <img src="mg/logo.gif" alt="freewords.ru — сервис транслитерации" class="logo"> -->
			</a>
			<!-- Типа для мобильных девайсов, меню складывается в кнопочку -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<p>Меню</p>
				</button>
			</div>
			<!-- Главное меню -->
			<div class="collapse navbar-collapse" id="navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							Транслитерация
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu" role="menu">
							<li>{{ HTML::link('translate/name', 'Имени'); }}</li>
							<li>{{ HTML::link('translate/date', 'Даты'); }}</li>
							<li>{{ HTML::link('translate/number', 'Чисел'); }}</li>
						</ul>
					</li>
					<li><a href="#">Словари</a></li>
					<li><a href="#">Информация</a></li>
				</ul>
			</div>
	</div><!-- /container -->
		























