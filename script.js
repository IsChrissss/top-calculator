/* --- 1. STATE & UTILITIES --- */
const mathUtils = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b === 0 ? "LMAO NO" : a / b),
};

let firstNum = null;
let currentOperator = null;
let shouldResetScreen = false;

const operate = (operator, a, b) => {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+': return mathUtils.add(a, b);
        case '-': return mathUtils.subtract(a, b);
        case '*': return mathUtils.multiply(a, b);
        case '/': return mathUtils.divide(a, b);
        default: return null;
    }
};

/* --- 2. UI INITIALIZATION --- */
const container = document.querySelector(".container");

const screen = document.createElement("span");
screen.classList.add("screen");
screen.textContent = "0";
container.appendChild(screen);

const buttons = document.createElement("div");
buttons.classList.add("buttons");
container.appendChild(buttons);

const updateDisplay = (value) => {
    if (typeof value === 'number') {
        value = Math.round(value * 1000) / 1000;
    }
    screen.textContent = value;
};

/* --- 3. CORE LOGIC FUNCTIONS --- */
function handleNumber(num) {
    if (screen.textContent === "0" || shouldResetScreen) {
        screen.textContent = (num === '.' && shouldResetScreen) ? "0." : num;
        shouldResetScreen = false;
    } else {
        if (num === '.' && screen.textContent.includes('.')) return;
        screen.textContent += num;
    }
}

function handleOperator(nextOperator) {
    const displayValue = screen.textContent;

    if (firstNum !== null && currentOperator !== null && !shouldResetScreen) {
        const result = operate(currentOperator, firstNum, displayValue);
        updateDisplay(result);
        firstNum = result;
    } else {
        firstNum = displayValue;
    }

    currentOperator = nextOperator;
    shouldResetScreen = true;
}

function handleEvaluate() {
    if (currentOperator === null || shouldResetScreen) return;
    
    const secondNum = screen.textContent;
    const result = operate(currentOperator, firstNum, secondNum);
    
    updateDisplay(result);
    firstNum = result; 
    currentOperator = null;
    shouldResetScreen = true; 
}

/* --- 4. BUTTON GENERATION & EVENT LISTENERS --- */
const buttonValues = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
];

buttonValues.forEach(value => {
    const button = document.createElement("button");
    button.textContent = value;
    buttons.appendChild(button);

    button.addEventListener("click", () => {
        if (!isNaN(value) || value === '.') {
            handleNumber(value);
        } else if (value === '=') {
            handleEvaluate();
        } else {
            handleOperator(value);
        }
    });
});

const clearButton = document.createElement("button");
clearButton.textContent = "C";
buttons.appendChild(clearButton);

clearButton.addEventListener("click", () => {
    updateDisplay("0");
    firstNum = null;
    currentOperator = null;
    shouldResetScreen = false;
});