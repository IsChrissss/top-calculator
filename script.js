const mathUtils = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    mult: (a, b) => a * b,
    divide: (a, b) => a / b,
}

let firstNum;
let operator = '';
let secondNum;

const operate = (firstNum, operator, secondNum) => {
    switch (operator) {
        case '+':
            return mathUtils.add(firstNum, secondNum)
        case '-':
            return mathUtils.substract(firstNum, secondNum);
        case '*':
            return mathUtils.mult(firstNum, secondNum)
        case '/':
            return mathUtils.divide(firstNum, secondNum)
    }
}