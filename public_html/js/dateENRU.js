function datePropisEN(text)
{
var tt='';
tt=datePropisEN_two(text);
var resultEN='';
resultEN=text;
var MountstrEN='';

//Американское написание краткое
switch (text.substr(5,2)) {
		case '01': 	MountstrEN = ' January ';break;
		case '02':	MountstrEN = ' February ';break;
		case '03': 	MountstrEN = ' March ';break;
		case '04': 	MountstrEN = ' April ';break;
		case '05': 	MountstrEN = ' May ';break;
		case '06': 	MountstrEN = ' June ';break;
		case '07': 	MountstrEN = ' July ';break;
		case '08': 	MountstrEN = ' August ';break;
		case '09': 	MountstrEN = ' September ';break;
		case '10': 	MountstrEN = ' October ';break;
		case '11': 	MountstrEN = ' November ';break;
		case '12': 	MountstrEN = ' December ';break;}
resultEN=MountstrEN+ text.substr(8,2)+',' + text.substr(0,4);

document.getElementById('dateResultEN').innerHTML=resultEN;
document.getElementById('hiddenBlock').style.visibility='visible';

switch (text.substr(5,2)) {
		case '01': 	MountstrEN = ' January ';break;
		case '02':	MountstrEN = ' February ';break;
		case '03': 	MountstrEN = ' March ';break;
		case '04': 	MountstrEN = ' April ';break;
		case '05': 	MountstrEN = ' May ';break;
		case '06': 	MountstrEN = ' June ';break;
		case '07': 	MountstrEN = ' July ';break;
		case '08': 	MountstrEN = ' August ';break;
		case '09': 	MountstrEN = ' September ';break;
		case '10': 	MountstrEN = ' October ';break;
		case '11': 	MountstrEN = ' November ';break;
		case '12': 	MountstrEN = ' December ';break;}
resultEN=text.substr(8,2)+ MountstrEN+ + text.substr(0,4);
//document.getElementById('dateResultEN_GB').innerHTML=resultEN;
//document.getElementById('hiddenBlock').style.visibility='visible';

return resultEN;

//return r;
}
function datePropisEN_two(text) {
var resultEN='';
resultEN=text;
var MountstrEN='';

var dayEN=new Array(); // массив чисел месяца
	dayEN[1] = 'the first'; dayEN[2] = 'the second '; dayEN[3] = 'the third';
	dayEN[4] = 'the fourth'; 	dayEN[5] = 'the fifth'; 	dayEN[6] = 'the sixth';
	dayEN[7] = 'the seventh'; 	dayEN[8] = 'the eighth'; 	dayEN[9] = 'the ninth';
	dayEN[10] = 'the tenth'; 	dayEN[11] = 'the eleventh'; 	dayEN[12] = 'the twelfth';
	dayEN[13] = 'the thirteenth'; 	dayEN[14] = 'the fourteenth'; dayEN[15] = 'the fifteenth';
	dayEN[16] = 'the sixteenth'; 	dayEN[17] = 'the seventeenth'; 	dayEN[18] = 'the eighteenth';
	dayEN[19] = 'the nineteenth'; dayEN[20] = 'the twentieth'; dayEN[21] = 'the twenty-first';
	dayEN[22] = 'the twenty-second'; dayEN[23] = 'the twenty-third'; dayEN[24] = 'the twenty-fourth';
	dayEN[25] = 'the twenty-fifth'; dayEN[26] = 'the twenty-sixth'; 	dayEN[27] = 'the twenty-seventh';
	dayEN[28] = 'the twenty-eighth'; 	dayEN[29] = 'the twenty-ninth'; 	dayEN[30] = 'the thirtieth';
	dayEN[31] = 'thirty-first'; 

switch (text.substr(5,2)) {
	case '01': 	MountstrEN = ' January ';break;
	case '02':	MountstrEN = ' February ';break;
	case '03': 	MountstrEN = ' March ';break;
	case '04': 	MountstrEN = ' April ';break;
	case '05': 	MountstrEN = ' May ';break;
	case '06': 	MountstrEN = ' June ';break;
	case '07': 	MountstrEN = ' July ';break;
	case '08': 	MountstrEN = ' August ';break;
	case '09': 	MountstrEN = ' September ';break;
	case '10': 	MountstrEN = ' October ';break;
	case '11': 	MountstrEN = ' November ';break;
	case '12': 	MountstrEN = ' December ';break;}

var propisYearEN=new Array(); // массив чисел месяца
	propisYearEN[1] = 'one'; propisYearEN[2] = 'two '; propisYearEN[3] = 'three';
	propisYearEN[4] = 'four'; 	propisYearEN[5] = 'five'; 	propisYearEN[6] = 'six';
	propisYearEN[7] = 'seven'; 	propisYearEN[8] = 'eight'; 	propisYearEN[9] = 'nine';
	
	propisYearEN[10] = 'ten'; 	propisYearEN[20] = 'twenty'; 	propisYearEN[30] = 'thirty';
	propisYearEN[40] = 'forty'; 	propisYearEN[50] = 'fifty'; propisYearEN[60] = 'sixty';
	propisYearEN[70] = 'seventy'; 	propisYearEN[80] = 'eighty'; 	propisYearEN[90] = 'ninety';
	
var prHOne='one thousand nine hundred' ; // Одна тысяча девятьсот
var prHTwo='two thousand' ; // Две тысячи
var prH=''
switch (text.substr(0,2)) {
	case '20': 	prH= prHTwo	;break;
	case '19':	prH= prHOne	;break;
}

resultEN=dayEN[text.substr(8,2)] +' of' + MountstrEN + prH;
document.getElementById('dateResultEN_GB_Yr').innerHTML=resultEN;
document.getElementById('hiddenBlock').style.visibility='visible';
var t='';
}