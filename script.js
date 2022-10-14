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
let lastOperation = false;

const numerals = document.querySelectorAll(".numeral");
numerals.forEach((button) => {
    button.addEventListener('click', () => {
        // TODO - Limit displayValue to 12(?) characters
        if (lastOperation == true) {
            displayValue = [];
            document.getElementById("display").textContent = displayValue;
            lastOperation = false;
        }
        displayValue.push(button.value);
        if (displayValue.length > 12) {
            document.getElementById("display").textContent = "Out of range";
            displayValue = []
            operation = [];
            return;
            //displayValue[0] = displayValue[0].toFixed(11);
        }
        document.getElementById("display").textContent = displayValue.join("");
    })
});

const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
    button.addEventListener('click', () => {
        operation.push(button.value);
        operation.push(Number(displayValue.join("")));
        displayValue = [];
    })
});

const equals = document.querySelector(".equals");
    equals.addEventListener('click', () => {
        operation.push(Number(displayValue.join("")));
        displayValue = [(operate(operation))];
        // Truncate long decimals
        if (`${displayValue[0]}`.length > 12 && `${displayValue[0]}`.includes(".")) {
            displayValue[0] = displayValue[0].toFixed(10) + "+";
        }
        // Truncate high values
        if (`${displayValue[0]}`.length > 12) {
            displayValue[0] = displayValue.join("").substring(0, 11) + "+";
        }
        //TO-DO - display error for impossible operations ie "1/0"
        if (`${displayValue[0]}` == "Infinity" || `${displayValue[0]}` == "NaN" ) {
            displayValue[0] = "Nope! ಠ_ಠ";
        }
        document.getElementById("display").textContent = displayValue;
        lastOperation = true;
        operation = [];
    });

const clear = document.querySelector(".clear");
    clear.addEventListener('click', () => {
        displayValue = [];
        operation = [];
        lastOperation = false;
        document.getElementById("display").textContent = displayValue;
    });