// document.getElementById('hiddenBlock').style.display='none'; // скрываем блок Результата
document.getElementById('hiddenBlock').style.visibility='hidden'; // скрываем блок Результата
$('#nameField').keyup(checkFieldName); // вместо вставки событий в HTML можно здесь их вставлять. В скобках функция для запуска 
//keyup — это событие которое появлется при отпускнии клавиши. Подробнее в гугле "события jquery"
$('#dateField').blur(datePropisRU);
$('#summField').blur(summPropisRU);
//$('#like').popover('hide');

$('#now').click(currentDate); // При клике на Сегодня запускает функцию подстановки даты  поле

function checkFieldName() { 
    var val = $('#nameField').val(); //это типа document.getElementById но на jQuery (надстройка над javascript)
        if (val.length > 2) {
            translateEN();
            document.getElementById('hiddenBlock').style.visibility='visible';
            $('#nameField').tooltip('destroy'); //всплывающая подсказка о 3 буквах
        }
        else if (val.length <= 2) {
            // document.getElementById('send').disabled = 1;
            document.getElementById('hiddenBlock').style.visibility='hidden';
            $('#nameField').tooltip('show'); //всплывающая подсказка о 3 буквах
            }
};

function currentDate() { // Вычисляет текущую дату для dates.html
    var date = new Date();
    var values = [date.getDate(), date.getMonth() + 1];   // Выдает дату но ьез нулей впереди
    for( var id in values ) {
        values[ id ] = values[ id ].toString().replace( /^([0-9])$/, '0$1' ); // Добавляет нули
        }
    document.getElementById('dateField').value = values[0]+'.'+values[1]+'.'+date.getFullYear();
}

function datePropisRU(){
var text=document.getElementById('dateField').value;
if (test!="") { // если дата верная, то продолжение выполнения, иначе ничего не происходит
	var resultDate;
	var userMounth;var userDay;var Daystr;var Mountstr;
	var day=new Array(); // массив чисел месяца
			day[1] = 'Первого'; day[2] = 'Второго'; day[3] = 'Третьего';
			day[4] = 'Четвертого'; 	day[5] = 'Пятого'; 	day[6] = 'Шестого';
			day[7] = 'Седьмого'; 	day[8] = 'Восьмого'; 	day[9] = 'Девятого';
			day[10] = 'Десятого'; 	day[11] = 'Одиннадцатого'; 	day[12] = 'Двенадцатого';
			day[13] = 'Тринадцатого'; 	day[14] = 'Четырнадцатого'; day[15] = 'Пятнадцатого';
			day[16] = 'Шестнадцатого'; 	day[17] = 'Семнадцатого'; 	day[18] = 'Восемнадцатого';
			day[19] = 'Девятнадцатого'; day[20] = 'Двадцатого'; day[21] = 'Двадцать первого';
			day[22] = 'Двадцать второго'; day[23] = 'Двадцать третьего'; day[24] = 'Двадцать четвертого';
			day[25] = 'Двадцать пятого'; day[26] = 'Двадцать шестого'; 	day[27] = 'Двадцать седьмого';
			day[28] = 'Двадцать восьмого'; 	day[29] = 'Двадцать девятого'; 	day[30] = 'Тридцатого';
			day[31] = 'Тридцать первого'; 

	var year=new Array();
		year[1]='одна тысяча'; year[2]='две тысячи'; year[3]='три тысячи';year[0]='' //- тысячелетия
		year[11] = 'сто'; 	year[12] = 'двести';	year[13] = 'триста';	year[14] = 'четыреста';	year[15] = 'пятьсот';	year[16] = 'шестьсот';	year[17] = 'семьсот'; 	year[18] = 'восемьсот';
		year[19] = 'девятьсот'; // - столетия
		
		year[21]= 'десятого';year[22]= 'двадцатого';year[23]= 'тридцатого';year[24]= 'сорокового';year[25]= 'пятьдесятого';year[26]= 'шестьдесятого';year[27]= 'семидесятого';year[28]= 'восьмидесятого';year[29]= 'девяностого';
		
		year[33]= 'тридцать';year[34]= 'сорок';year[35]= 'пятьдесят';year[36]= 'шестьдесят';year[37]= 'семьдесят';year[38]= 'восемьдесят';year[39]= 'девяносто';
		
		year[41]= 'сотого';year[42]= 'двухсотого';year[43]= 'трехсотого';year[44]= 'четырехсотого';year[45]= 'пятисотого';year[46]= 'шестисотого';year[47]= 'семисотого';year[48]= 'восьмисотого'; year[47]= 'девятисотого';
		
	resultDate=text;
	userDay=resultDate.substr(8,2); // из строки даты извлекается день (формат представления 2011-11-01 где 01 - день (первое)
	Daystr=day[parseInt(userDay)]; // значение из строки переводится с помощью функции parseInt в числовое значение, далее согласно массиву переменной Daystr присваивается строковое значение 
	userMounth=resultDate.slice(5,-3);// из строки даты извлекается день (формат представления 2011-11-01 где 11 - месяц
	
	switch (userMounth) {
		case '01': 	Mountstr = ' января';break;
		case '02':	Mountstr = ' февраля';break;
		case '03': 	Mountstr = ' марта';break;
		case '04': 	Mountstr = ' апреля';break;
		case '05': 	Mountstr = ' мая';break;
		case '06': 	Mountstr = ' июня';break;
		case '07': 	Mountstr = ' июля';break;
		case '08': 	Mountstr = ' августа';break;
		case '09': 	Mountstr = ' сентября';break;
		case '10': 	Mountstr = ' октября';break;
		case '11': 	Mountstr = ' ноября';break;
		case '12': 	Mountstr = ' декабря';break;}
	// Выяснение введенного года - самое сложное :)
	
	var yTen='';
	var yHund='';
	var yYear='';
	var YearStr='';
	var strYear='';
	YearStr=resultDate.substr(0,4);
	
	yTen=parseInt(YearStr.substr(2,2)); // переменной присваивается значение десятков 
	var k='';
	var l='';
	if (yTen > 1 && yTen< 20) {  // если лиапозон десятков лежит в пределах 1-19 то используется просто массив дней
		strYear=' '+day[yTen];
		strYear+=' года'; }
	else if (parseInt(YearStr.substr(3,1))==0) { // определяется равен ли год десятку - 10,20,30 и т.д - т.к. написание на русском различается
		strYear=' ' + year[(parseInt(YearStr.substr(2,1))+20)]; // если да, то берется из массива year - диапозон от 21-20 значения. Определяется это путем считывания 3 цифры переменной года YearStr и прибавляется 20
		strYear+=' года'; }
	else {
		// иначе берется каждая цифра из десятков года и находится в массиве их значение
		strYear=' '+year[(parseInt(YearStr.substr(2,1))+30)]+' '+ day[(parseInt(YearStr.substr(3,1)))]
		strYear+=' года';
		}
	var yearTek='';
	var strYears='';
	yaerTek= parseInt(YearStr.substr(0,2));
	switch (yaerTek) {
		case 20: strYears=' две тысячи'; break;
		case 19: strYears=' одна тыяча девятьсот'; break;
	}	

	
	strYear=strYears+' '+strYear.toLowerCase();

	var t=1;
	resultDate=Daystr+Mountstr + strYear;
	if (resultDate!='') {
		document.getElementById('dateResult').innerHTML=resultDate;
		document.getElementById('hiddenBlock').style.visibility='visible';
		}
	var kk=1;
 }
}
function translateEN(){
        
            var text=document.getElementById('nameField').value;
            var transl=new Array(); // массив по Е.Н. Тамарченко
                transl['а']='a';
                transl['б']='b';
                transl['в']='v';
                transl['г']='g';
                transl['д']='d';
                transl['е']='e';
                transl['ё']='yo';
                transl['ж']='zh';
                transl['з']='z';
                transl['и']='i';
                transl['й']='y';
                transl['к']='k';
                transl['л']='l';
                transl['м']='m';
                transl['н']='n';
                transl['о']='o';
                transl['п']='p';
                transl['р']='r';
                transl['с']='s';
                transl['т']='t';
                transl['у']='u';
                transl['ф']='f';
                transl['х']='kx';
                transl['ц']='ts';
                transl['ч']='ch';
                transl['ш']='sh';
                transl['щ']='shсh';
                transl['ъ']='"';
                transl['ы']='y\'';
                transl['ь']='';
                transl['э']='e\'';
                transl['ю']='yu';
                transl['я']='ya';

                var result=''; // строка возврата
            	var kk=''; // переменная счетчик буквы в слове
            	kk=0; 
            	var backsymbol=''; // переменная прдыдущей буквы. Устанавливается значение при условии Е И О 
            	var currentsymbol=''; // текущий символ
            	text=text.toLowerCase(); // преобразование строки во все буквы строчные (маленькие) :))
            		switch (text.charAt(0)) {
						case 'е':
						result=result+"ye" ;
            			kk=1; // если первая буква Е то присваивается сразу Ye и цикл пойдет со второго симвла k=1, иначе кк=0 и цикл идет с первой буквы (0)
            	
						break;
						case 'и':
						result=result+"i" ;
            			kk=1; // если первая буква Е то присваивается сразу Ye и цикл пойдет со второго симвла k=1, иначе кк=0 и цикл идет с первой буквы (0)
            	
						break;
						case 'о':
						result=result+"o" ;
            			kk=1; // если первая буква Е то присваивается сразу Ye и цикл пойдет со второго симвла k=1, иначе кк=0 и цикл идет с первой буквы (0)
						break; }
					           			
				text=text.toLowerCase();  // преобразование строки во все буквы строчные (маленькие) :))
            	for(i=kk;i<text.length;i++) // перебор всех букв
            		{
            			currentsymbol=text.charAt(i); // присваивание переменной значение текущего символа
            			if (currentsymbol=='е') { // начало цикла для "e"
								backsymbol=text.charAt(i-1); // считывается предыдущий символ 
									switch (backsymbol){
										case 'а' : case 'о' : case 'ю' : case 'у' :case 'э' :case 'е' :case 'ы' :case 'я' : case 'ь' :case 'ъ' : case 'и' : // тут перечисляем все условия для буквы Е (гласные + ь, ъ)
											currentsymbol='ye'; // если 'е' стоит после гласных и ь ъ то выводится 'ye'
											result+=currentsymbol;
									break;
									default:
										result+='e';} //
								}			
						else if (currentsymbol=='и') { // начало цикла для "и"
								backsymbol=text.charAt(i-1); // считывается предыдущий символ 
									switch (backsymbol){
										case 'ь' :case 'ъ' : // тут перечисляем все условия для буквы И ( ь, ъ)
											currentsymbol='ie'; // если 'И' стоит после ь ъ то выводится 'ie'
											result+=currentsymbol;
									break;
										default:
										result+='i'; }
								}			
						else if (currentsymbol=='о') { // начало цикла для "о"
								backsymbol=text.charAt(i-1); // считывается предыдущий символ 
									switch (backsymbol){
										case 'ь' :case 'ъ' : // тут перечисляем все условия для буквы О ( ь, ъ)
											currentsymbol='yo'; // если 'О' стоит после ь ъ то выводится 'yo'
											result+=currentsymbol;
									break;
										default:
										result+='o'; }
								}			
						
						else {
            					if(transl[text[i]]!=undefined) // если это не Е И О то выводится буква соответствующая массиву
            						result+=transl[text[i]]; 
            					else { result+=text[i]; }
							}
            			
            			
                } // конец перебора всех букв
            	result=result.toUpperCase(); // преобразование строки во все буквы прописные

                document.getElementById('nameResult').innerHTML=result;
                document.getElementById('hiddenBlock').style.visibility='visible';
            
			

};

function translateDE(){

            var text=document.getElementById('nameField').value;
            var transl=new Array(); // 
                transl['а']='a';
                transl['б']='b';
                transl['в']='v';
                transl['г']='g';
                transl['д']='d';
                transl['е']='e';
                transl['ё']='yo';
                transl['ж']='zh';
                transl['з']='z';
                transl['и']='i';
                transl['й']='y';
                transl['к']='k';
                transl['л']='l';
                transl['м']='m';
                transl['н']='n';
                transl['о']='o';
                transl['п']='p';
                transl['р']='r';
                transl['с']='s';
                transl['т']='t';
                transl['у']='u';
                transl['ф']='f';
                transl['х']='kx';
                transl['ц']='ts';
                transl['ч']='ch';
                transl['ш']='sh';
                transl['щ']='shсh';
                transl['ъ']='"';
                transl['ы']='y\'';
                transl['ь']='';
                transl['э']='e\'';
                transl['ю']='yu';
                transl['я']='ya';

                var result=''; // строка возврата
            	var kk=''; // переменная счетчик буквы в слове
            	kk=0; 
            	var backsymbol=''; // переменная прдыдущей буквы. Устанавливается значение при условии Е И О 
            	var currentsymbol=''; // текущий символ
            	text=text.toLowerCase(); // преобразование строки во все буквы строчные (маленькие) :))
            		switch (text.charAt(0)) {
						case 'е':
						result=result+"ye" ;
            			kk=1; // если первая буква Е то присваивается сразу Ye и цикл пойдет со второго симвла k=1, иначе кк=0 и цикл идет с первой буквы (0)
            	
						break;
						case 'и':
						result=result+"i" ;
            			kk=1; // если первая буква Е то присваивается сразу Ye и цикл пойдет со второго симвла k=1, иначе кк=0 и цикл идет с первой буквы (0)
            	
						break;
						case 'о':
						result=result+"o" ;
            			kk=1; // если первая буква Е то присваивается сразу Ye и цикл пойдет со второго симвла k=1, иначе кк=0 и цикл идет с первой буквы (0)
						break; }
					           			
				text=text.toLowerCase();  // преобразование строки во все буквы строчные (маленькие) :))
            	for(i=kk;i<text.length;i++) // перебор всех букв
            		{
            			currentsymbol=text.charAt(i); // присваивание переменной значение текущего символа
            			if (currentsymbol=='е') { // начало цикла для "e"
								backsymbol=text.charAt(i-1); // считывается предыдущий символ 
									switch (backsymbol){
										case 'а' : case 'о' : case 'ю' : case 'у' :case 'э' :case 'е' :case 'ы' :case 'я' : case 'ь' :case 'ъ' : case 'и' : // тут перечисляем все условия для буквы Е (гласные + ь, ъ)
											currentsymbol='ye'; // если 'е' стоит после гласных и ь ъ то выводится 'ye'
											result+=currentsymbol;
									break;
									default:
										result+='e';} //
								}			
						else if (currentsymbol=='и') { // начало цикла для "и"
								backsymbol=text.charAt(i-1); // считывается предыдущий символ 
									switch (backsymbol){
										case 'ь' :case 'ъ' : // тут перечисляем все условия для буквы И ( ь, ъ)
											currentsymbol='ie'; // если 'И' стоит после ь ъ то выводится 'ie'
											result+=currentsymbol;
									break;
										default:
										result+='i'; }
								}			
						else if (currentsymbol=='о') { // начало цикла для "о"
								backsymbol=text.charAt(i-1); // считывается предыдущий символ 
									switch (backsymbol){
										case 'ь' :case 'ъ' : // тут перечисляем все условия для буквы О ( ь, ъ)
											currentsymbol='yo'; // если 'О' стоит после ь ъ то выводится 'yo'
											result+=currentsymbol;
									break;
										default:
										result+='o'; }
								}			
						
						else {
            					if(transl[text[i]]!=undefined) // если это не Е И О то выводится буква соответствующая массиву
            						result+=transl[text[i]]; 
            					else { result+=text[i]; }
							}
            			
            			
                } // конец перебора всех букв
            	result=result.toUpperCase(); // преобразование строки во все буквы прописные
            
                document.getElementById('nameResult').innerHTML=result;
                document.getElementById('hiddenBlock').style.visibility='visible';
            
			
};

function summPropisRU() {
var text=document.getElementById('summField').value;
var num='';
num=text;
// Все варианты написания разрядов прописью скомпануем в один небольшой массив
 var m=[
  ['ноль'],
  ['-','один','два','три','четыре','пять','шесть','семь','восемь','девять'],
  ['десять','одиннадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'],
  ['-','-','двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто'],
  ['-','сто','двести','триста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот'],
  ['-','одна','две']
 ]

// Все варианты написания разрядов прописью скомпануем в один небольшой массив
 var r=[
  ['...ллион','ов','','а'], // используется для всех неизвестно больших разрядов 
  ['тысяч','','а','и'],
  ['миллион','ов','','а'],
  ['миллиард','ов','','а'],
  ['триллион','ов','','а'],
  ['квадриллион','ов','','а'],
  ['квинтиллион','ов','','а'],
  ['секстилион','ов','','а'],
  ['септилион','ов','','а'],
  ['окталион','ов','','а'],
  ['ноналион','ов','','а'],
  ['декалион','ов','','а'],
  ['эндекалион','ов','','а'],
  ['додекалион','ов','','а']
  // ,[... список можно продолжить
 ]
 
 if(num==0)return m[0][0] // Если число ноль, сразу сообщить об этом и выйти
 var o=[] // Сюда записываем все получаемые результаты преобразования
 
 // Разложим исходное число на несколько трехзначных чисел и каждое полученное такое число обработаем отдельно
 num=['','00','0'][num.split(/\d{3}/).join('').length]+num
 var numlength=num.length 
 var k=0,n=-1

// Алгоритм, преобразующий трехзначное число в строку прописью 
 while(k*3<numlength){pp=num.substr(-3*(k+1),3)
  if(pp!='000')o[++n]=[];else{k++;continue}
  for(var i=0;i<=2;i++)if(pp[i]==0)continue;else
   switch(i){
    case 0:o[n][o[n].length]=m[4][pp[i]];break
    case 1:if(pp[i]==1){o[n][o[n].length]=m[2][pp[2]];i=3;continue}else{o[n][o[n].length]=m[3][pp[i]]}break
    case 2:if((k==1&&pp[i]<=2)||(pp[i]<=2)){o[n][o[n].length]=m[5][pp[i]]}else{o[n][o[n].length]=m[1][pp[i]]}break
   }

// Окончание для числительных
  if(pp>0&&k>0)o[n][o[n].length]=ci(pp,r[k])
  o[n]=o[n].join(' ');k++
 }
	
	result= o.reverse().join(" ")
	
	document.getElementById('summResult').innerHTML=result;
                document.getElementById('hiddenBlock').style.visibility='visible';
            
}

// Окончание для числительных
function ci(n,c){
 n=n.toString().substr(-2)
 return c[0]+((/^[0,2-9]?[1]$/.test(n))?c[2]:((/^[0,2-9]?[2-4]$/.test(n))?c[3]:c[1]))
}

