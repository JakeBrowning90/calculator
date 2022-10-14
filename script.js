const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const operate = ([operator, x, y]) =>  {
    if (operator == "+") {
        return add(x, y)
    }
    else if (operator == "-") {
        return subtract(x, y)
    }
    else if (operator == "*") {
        return multiply(x, y)
    }
    else if (operator == "/") {
        return divide(x, y)
    } 
}

let displayValue = [];
let operation = [];
//document.getElementById("display").textContent = "";
const numerals = document.querySelectorAll(".numeral");
numerals.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue.push(button.value);
        document.getElementById("display").textContent = displayValue.join("");
    })
});

const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
    button.addEventListener('click', () => {
        operation.push(button.value);
        console.log(operation);
        console.log(displayValue)
        operation.push(Number(displayValue.join("")));
        displayValue = [];
    })
});

const equals = document.querySelector(".equals");
    equals.addEventListener('click', () => {
        operation.push(Number(displayValue.join("")));
        displayValue = [(operate(operation))];
        document.getElementById("display").textContent = displayValue;
        operation = [];
    });

const clear = document.querySelector(".clear");
    clear.addEventListener('click', () => {
        displayValue = [];
        operation = [];
        document.getElementById("display").textContent = displayValue;
    });