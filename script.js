const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const increasebtn = document.getElementById("increase");
const display = document.getElementById("numDisplay");

let count = 0;

increasebtn.onclick = function() {
    count++;
    display.textContent = count;
}

decreasebtn.onclick = function() {
    count--;
    display.textContent = count;
}

resetbtn.onclick = function() {
    count = 0;
    display.textContent = count;
}