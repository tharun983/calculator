// Math functions

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

// operate

function operate(operator,a,b) {
    if (operator === "+") return add(a,b);
    if (operator === "-") return subtract(a,b);
    if (operator === "*") return multiply(a,b);
    if (operator === "/") return division(a,b);
    return null; 
}