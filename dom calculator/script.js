let num1 = 7;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");
let sum = 0;
function add(){
   sum = num1 + num2;
    sumEl.textContent = "Sum: " + sum;
}
function sub(){
    sum = num1 - num2;
    sumEl.textContent = "Sum: " + sum;
}
function div(){
    sum = num1 / num2;
    sumEl.textContent = "Sum: " + sum;
}
function mul(){
    sum = num1 * num2;
    sumEl.textContent = "Sum: " + sum;
}
