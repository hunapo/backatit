let a = prompt("Choose your first number:");
let b = prompt("Choose your second number:");
let c = prompt("What operator would you like to use?")
let num1 = parseFloat(a);
let num2 = parseFloat(b);
let operator = c;
console.log("num1", num1);
console.log("num2", num2);
console.log("operator used", operator);

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
    console.log("multiply", multiplyValue.toFixed(2));
    //return multiplyValue;
};

function divide(num1, num2) {
    let divideValue = (num1 / num2);
    

    if (divideValue == "Infinity") {
        return alert("Error, you can't divide by 0!");
    } else {
        return console.log("divide", divideValue.toFixed(2));
    }

    //return divideValue;
};

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
        console.log("passing throught switch +");
        add(num1, num2);
        break;
         case "-":
        console.log("passing throught switch -");
        substract(num1, num2);
        break;
        case "*":
        console.log("passing throught switch *");
        multiply(num1, num2);
        break;
        case "/":
        console.log("passing throught switch /");
        divide(num1, num2);
        break;
        default : alert("Error, didn't receive an operator, or type not as expected!");
};};

operate(operator, num1, num2);

