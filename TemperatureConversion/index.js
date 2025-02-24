const textBox = document.getElementById("textBox");
const toFarhenheit = document.getElementById("toFarhenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;
function convert(){
if(toFarhenheit.checked){
    // result.textContent = "Selected F !!";
    temp = Number(textBox.value);
    temp = (9/5)*temp + 32;
    result.textContent = temp.toFixed(1) + "F";



}
else if(toCelsius.checked){
    // result.textContent = "Selected C !!";
    temp = Number(textBox.value);
    temp = (5/9)*(temp-32);
    result.textContent = temp.toFixed(1) + "C";


}
else{
result.textContent = "Select a unit !!";
}
}