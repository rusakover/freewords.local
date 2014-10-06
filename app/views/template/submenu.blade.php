<ul class="nav nav-tabs">
	<li class=" {{ $active == 'name' ? 'active' : '' }} " >
		{{ HTML::link('translate/name', 'Имена'); }}
	</li>
	<li class=" {{ $active == 'date' ? 'active' : '' }} " >
		{{ HTML::link('translate/date', 'Даты'); }}
	</li>
</ul>