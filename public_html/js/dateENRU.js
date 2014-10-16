function datePropisEN(text)
{
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
		case '10': 	MountstrEN = ' Oktober ';break;
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
		case '10': 	MountstrEN = ' Oktober ';break;
		case '11': 	MountstrEN = ' November ';break;
		case '12': 	MountstrEN = ' December ';break;}
resultEN=text.substr(8,2)+ MountstrEN+ + text.substr(0,4);
document.getElementById('dateResultEN_GB').innerHTML=resultEN;
document.getElementById('hiddenBlock').style.visibility='visible';


//return r;
}
