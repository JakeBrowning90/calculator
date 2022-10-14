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
        // TODO - Limit displayValue to 12(?) characters
        // TODO - override display showing result of last operation
        displayValue.push(button.value);
        document.getElementById("display").textContent = displayValue.join("");
    })
});

const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
    button.addEventListener('click', () => {
        operation.push(button.value);
        //console.log(operation);
        //console.log(displayValue);
        operation.push(Number(displayValue.join("")));
        displayValue = [];
    })
});

const equals = document.querySelector(".equals");
    equals.addEventListener('click', () => {
        operation.push(Number(displayValue.join("")));
        displayValue = [(operate(operation))];
        if (`${displayValue[0]}`.length > 12) {
            displayValue[0] = displayValue[0].toFixed(12);
        }
        //TO-DO - display error for impossible operations ie "1/0"
        document.getElementById("display").textContent = displayValue;
        operation = [];
    });

const clear = document.querySelector(".clear");
    clear.addEventListener('click', () => {
        displayValue = [];
        operation = [];
        document.getElementById("display").textContent = displayValue;
    });