const increase_btn = document.getElementById("increase");
const decrease_btn = document.getElementById("decrease");
const reset_btn = document.getElementById("reset");
const display = document.getElementById("counter-display");

increase_btn.onclick = function (){
    let x = Number(display.textContent);
    display.textContent = String(x+1);
    };

decrease_btn.onclick = function (){
    let x = Number(display.textContent);
    display.textContent = String(x-1);
    };

reset_btn.onclick = function (){
    display.textContent = String(0);
    };