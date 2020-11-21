var disnumber=""
var operation=""
var previousoperand=""
var currentoperand=""
var thisnumber=""

$(".number ,.operand,.equal ").click(function(){
if(operation===""){
	 thisnumber=$(this).text();
     updatedisplay1(thisnumber);

 } else{
 	 thisnumber=$(this).text();
     updatedisplay2(thisnumber);
 }
})
$(".AC").click(function(){
	 disnumber=""
     operation=""
     previousoperand=""
     currentoperand=""
     result=""
     thisnumber=""
    $('.current-operand').text("");
    $('.previous-operand').text("");
    
})

$(".DEL").click(function(){
	if(operation===""){
		disnumber=disnumber.slice(0,-1);
		$('.previous-operand').text(disnumber);
	}else{
		disnumber=disnumber.slice(0,-1);
		$('.current-operand').text(disnumber);
	}
})

function updatedisplay1(thisnumber){
	if((thisnumber==="."&&disnumber.includes("."))) return;
	disnumber=disnumber+thisnumber;
	$('.previous-operand').text(disnumber);
	if(disnumber.includes("*")||disnumber.includes("-")||
		disnumber.includes("/")||disnumber.includes("+")){
		var length=disnumber.length;
	    operation=disnumber.slice(length-1,length);
		disnumber=disnumber.slice(0,length-1);
		previousoperand=disnumber;	
		disnumber=""	
	}else if (disnumber.includes("=")){
		$('.current-operand').text(disnumber.slice(0,-1));
	}
}
function updatedisplay2(thisnumber){
	if((thisnumber==="."&&disnumber.includes("."))) return;
	disnumber=disnumber+thisnumber;
	$('.current-operand').text(disnumber);
	if(disnumber.includes("*")||disnumber.includes("-")||
		disnumber.includes("/")||disnumber.includes("+")){
		alert("only 2 operands at a time CLICK AC!!");
}
	else if(disnumber.includes("="))
		{
			var length=disnumber.length;
			currentoperand=disnumber.slice(0,length-1);
			
			compute();


		}
	}
function compute(){
	switch(operation){
		case "+":{
	var result=Number(previousoperand)+Number(currentoperand); break;}
	case "-":{
	var result=Number(previousoperand)-Number(currentoperand); break; } 
	case "/":{
	var result=Number(previousoperand)/Number(currentoperand); break; }
	case "*":{
	var result=Number(previousoperand)*Number(currentoperand); }
}
	currentoperand=result;
	updatedisplay(result);
	
}
function updatedisplay(result){
	$('.previous-operand').text("");
$('.current-operand').text(result);

}