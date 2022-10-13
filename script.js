const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const operate = (operator, x, y) =>  {
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

console.log(operate("+", 1, 1));
console.log(operate("-", 1, 1));
console.log(operate("*", 5, 5));
console.log(operate("/", 20, 5));

document.getElementById("display").textContent = "";

const numerals = document.querySelectorAll(".numeral");
numerals.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue.push(button.value);
        document.getElementById("display").textContent = displayValue.join("");
    })
});