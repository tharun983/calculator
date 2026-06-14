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

    if (shouldReset) {
        currentInput = "0";
        shouldReset = false;
    }

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

// New State variables -------------------------------------------------------------------

let firstOperand = null;
let operator = null;
let shouldReset = false;

// Handle Operator Clicks ----------------------------------------------------------------

function handleOperator(op) {
    const current = parseFloat(currentInput);

    if (firstOperand !== null && !shouldReset) {
        const result = operate(operator,firstOperand,current);
        updateDisplay(result);
        currentInput = String(result);
        firstOperand = result;
    } else {
        firstOperand = current;
    }

    operator = op;
    shouldReset = true;
}

// Handle Clear ----------------------------------------------------------------------------

function handleEquals() {

    if (operator === null || firstOperand === null) return;

    const secondOperand = parseFloat(currentInput);
    const result = operate(operator, firstOperand, secondOperand);

    updateDisplay(result);
    currentInput = String(result);

    // Reeset state so calculator is ready for new calculation
    firstOperand = null;
    operator = null;
    shouldReset = true;
}

// Handle Clear ------------------------------------------------------------------------------

function handleClear() {
    currentInput = "0";
    firstOperand = null;
    operator = null;
    shouldReset = false;
    updateDisplay("0");
}

// New Event Listeners ------------------------------------------------------------------------

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        handleOperator(button.dataset.op);
    });
});

document.querySelector(".equals").addEventListener("click", handleEquals);
document.querySelector(".clear").addEventListener("click", handleClear);