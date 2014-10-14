
<!-- Вывод подменю -->
@if (isset($page))

<div class="container">
	<ul class="nav nav-tabs">
			<li class=" {{ ($page->category) == 'name' ? 'active' : '' }} " >
				{{ HTML::link('translate/name', 'Имена'); }}
			</li>
			<li class=" {{ ($page->category) == 'date' ? 'active' : '' }} " >
				{{ HTML::link('translate/date', 'Даты'); }}
			</li>
			<li class=" {{ ($page->category) == 'summ' ? 'active' : '' }} " >
				{{ HTML::link('translate/summ', 'Сумма'); }}
			</li>
	</ul>
</div>

@endif