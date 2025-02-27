console.log("JS file loaded successfully!");


display  = document.getElementById('display');

 function appendToDisplay(input){
    display.value += input;
 }

 function clearScreen(){
  display.value = '';
 }

function calculate(){
    try{
    display.value = eval(display.value);
}catch(error){
    display.value = 'Error';
} 

}