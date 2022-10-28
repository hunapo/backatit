let a = prompt("Choose your first number:");
let b = prompt("Choose your second number:");
let num1 = parseFloat(a);
let num2 = parseFloat(b);
console.log("num1", num1);
console.log("num2", num2);

function add(num1, num2) {
    let addValue = num1 + num2;
    console.log("add", addValue);
    //return addValue;
};

function substract(num1, num2) {
    let substractValue = (num1 - num2);
    console.log("substract", substractValue);
    //return substractValue;
};

function multiply(num1, num2) {
    let multiplyValue = (num1 * num2);
    console.log("multiply", multiplyValue);
    //return multiplyValue;
};

function divide(num1, num2) {
    let divideValue = (num1 / num2);
    console.log("divide", divideValue);
    //return divideValue;
};