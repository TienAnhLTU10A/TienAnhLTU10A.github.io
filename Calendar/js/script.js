function loadYear(){
	var date=new Date();
	var yearCur=date.getFullYear();
	for(i=1993; i<yearCur;i++) {
		document.getElementById("selectYear").innerHTML +="<option  value='"+i+"'>"+i+"</option>";
	}
	document.getElementById("selectYear").innerHTML +="<option  selected='selected'  value='"+yearCur+"' >"+yearCur+"</option>";
	for(i=yearCur+1; i<=2023;i++) {
		document.getElementById("selectYear").innerHTML +="<option value='"+i+"'>"+i+"</option>";
	}
} 
function loadMonth(){
	document.getElementById("selectMonth").innerHTML="";	
	for(i=1; i<=12;i++) {
		if(i==1){		
				document.getElementById("selectMonth").innerHTML +="<option  value='1' >January</option>";			
		}
		if(i==2){
				document.getElementById("selectMonth").innerHTML +="<option  value='2' >February</option>";
		}
		if(i==3){
				document.getElementById("selectMonth").innerHTML +="<option value='3' >March</option>";
		}
		if(i==4){
				document.getElementById("selectMonth").innerHTML +="<option value='4' >April</option>";
		}
		if(i==5){
				document.getElementById("selectMonth").innerHTML +="<option value='5' >May</option>";
		}
		if(i==6){
				document.getElementById("selectMonth").innerHTML +="<option value='6' >June</option>";
		}
		if(i==7){
				document.getElementById("selectMonth").innerHTML +="<option value='7' >July</option>";
		}
		if(i==8){
				document.getElementById("selectMonth").innerHTML +="<option value='8' >August</option>";
		}
		if(i==9){
				document.getElementById("selectMonth").innerHTML +="<option value='9' >September</option>";
		}
		if(i==10){
				document.getElementById("selectMonth").innerHTML +="<option value='10' >October</option>";
		}
		if(i==11){
				document.getElementById("selectMonth").innerHTML +="<option value='11' >November</option>";
		}
		if(i==12){
				document.getElementById("selectMonth").innerHTML +="<option value='12' >December</option>";
		}
	}	
}	

function loadDay(){	
	document.getElementById("days").innerHTML="";
	var month = document.getElementById("selectMonth").value;
	var year=document.getElementById("selectYear").value;
	var date = new Date(year,month,1);
	var day=date.getDay()+1;
	for(i=1;i<day;i++) {
		document.getElementById("days").innerHTML+="<div class='cell'></div>"
	}
	var num_day = dayInMonth(month,year);
	var dayCur = new Date();
	var j=dayCur.getDate();
	for(i=1;i<num_day+1;i++) {		
		if(i==j) {
			document.getElementById("days").innerHTML+="<div class='cell dayCur' id='"+i+"' onclick='chooseDay("+i+")'>"+i+"</div>";
		} else {
			document.getElementById("days").innerHTML+="<div class='cell'"+i+" onclick='chooseDay("+i+")'>"+i+"</div>";
		}

	}	
} 
function load(){
	loadYear() ;
	loadMonth();
	loadDay();
	document.getElementById("calendar").style.display='block';	
}
function leapYear(year){
	if(((year%4==0)&&(year%100!=0))||(year%400==0)) {
		return true;
	} else {
		return false;
	}		
}
function dayInMonth(month, year){
	if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) {
		return 31;
	}
	if(month==4 || month==6 || month==9 || month==11) {
		return 30;	
	}
	if(month==2) {
		if(leapYear(year)) {
			return 29;
		} else {
			return 28;
		}
	}
}

function previousMonth(){
	var monthEle=document.getElementById("selectMonth");
	var monthIndex=document.getElementById("selectMonth").value-1;
	if(monthIndex>0) {		
		monthEle.value=monthIndex;
		loadDay();
	}
}
function nextMonth(){	
	var next_monthEle=document.getElementById("selectMonth");
	var next_monthIndex=parseInt(document.getElementById("selectMonth").value)+1;
	if(next_monthIndex<13) {		
		next_monthEle.value=next_monthIndex;
		loadDay();
	}
}
function previousYear(){
	var yearEle=document.getElementById("selectYear");
	var yearIndex=document.getElementById("selectYear").value-1;
	if(yearIndex>1992) {		
		yearEle.value=yearIndex;
		loadDay();
	}
}
function nextYear(){
	var yearEle=document.getElementById("selectYear");
	var yearIndex=parseInt(document.getElementById("selectYear").value)+1;
	if(yearIndex<2023) {		
		yearEle.value=yearIndex;
		loadDay();
	}
}
function chooseDay(id){
	var mon=document.getElementById("selectMonth").value;
	var year=document.getElementById("selectYear").value;
	document.getElementById("calendar_value").value=id+"/"+mon+"/"+year;
	document.getElementById("calendar").style.display="none";
}

