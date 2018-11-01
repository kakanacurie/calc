let inputOne="";
let inputTwo="";
let operation=null;
let result=null;

let display=document.getElementById('display')

const getNumber=number=> {
if(!operation && !inputTwo &&! result){
	inputOne += number;
	display.value=inputOne;

}else if (inputOne && operation && !result){
	inputTwo+= number;
	display.value= inputTwo;

}else if(result && operation){
inputTwo="";
inputOne=result;
inputTwo+=number;
display.value=inputTwo;
}

}
const getOperator=op=>{
	
	operation= op;
}
const getResult=()=>{
console.log(inputOne,inputTwo,result,operation);
	switch (operation){
		case "addButton":
		return(display.value = result= parseInt (inputOne)+parseInt(inputTwo));
		case "substractButton": 
		return(display.value= result= parseInt (inputOne)-parseInt(inputTwo));
		case "multiplyButton": 
		return( display.value= result= parseInt (inputOne)*parseInt(inputTwo));
		case "divideButton":
		return( display.value= result= parseInt (inputOne)/parseInt(inputTwo));
		default: return null;

	}
}
const resetAll=()=>{
inputOne="";
inputTwo="";
operation=undefined;
result= undefined;
display.value=0;
}