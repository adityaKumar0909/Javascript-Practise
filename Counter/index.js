const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtnBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count=0;

increaseBtnBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}


resetBtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}

