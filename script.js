// Math functions-------------------------------------------------------------------

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function division(a,b) {
    if (b === 0) {
        return "Error";
    }
    return a/b;
}

// operate----------------------------------------------------------------------------

function operate(operator,a,b) {
    if (operator === "+") return add(a,b);
    if (operator === "-") return subtract(a,b);
    if (operator === "*") return multiply(a,b);
    if (operator === "/") return division(a,b);
    return null; 
}

// State-------------------------------------------------------------------------------

let currentInput = "0";

//Grab DOM elements--------------------------------------------------------------------

const resultDisplay = document.getElementById("result");

// Update Display-----------------------------------------------------------------------

function updateDisplay(value) {
    resultDisplay.textContent = value;
}

// Handle digit clicks -----------------------------------------------------------------

function handleDigit(digit) {

    if (currentInput === "0") {
        currentInput = digit;
    } else if (digit === "." && currentInput.includes(".")) {
        return;
    } else {
        currentInput = currentInput + digit;
    }

    updateDisplay(currentInput);
}

// Event Listeners ----------------------------------------------------------------------

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(function(button){
    button.addEventListener("click",function() {
        handleDigit(button.dataset.num);
    });
});