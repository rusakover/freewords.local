<ul class="nav nav-tabs">

<!-- 			<li class="active"><a href="#">Имена</a></li> -->
			<li class=" {{ $active == 'name' ? 'active' : '' }} " >
				{{ HTML::link('translate/name', 'Имена'); }}
		
			</li>
			<li class=" {{ $active == 'date' ? 'active' : '' }} " >
				{{ HTML::link('translate/date', 'Даты'); }}
			</li>

			<!-- <li><a href="dates.html"><span class="link">Дата прописью</span></a></li> -->
		</ul>