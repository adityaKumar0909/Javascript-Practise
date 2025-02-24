function rollDice(){
const noOfDice = document.getElementById("diceNum").value;
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImage");
const values = [];
const images = [];

for(let i=0;i<noOfDice;i++){
const randomVal = Math.floor(Math.random() *6 ) + 1;
values.push(randomVal);
images.push(`<img src="dice_images/dice_${randomVal}.png" alt="Dice ${randomVal}" width="100">`);


}

diceResult.textContent = `dice: ${values.join(', ')}`;
diceImages.innerHTML = images.join(' ');


}
