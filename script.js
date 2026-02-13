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

const container = document.querySelector(".container")

const screen = document.createElement("span")
screen.classList.add("screen")
screen.textContent = "0"
container.appendChild(screen)

const buttons = document.createElement("div")
buttons.classList.add("buttons")
container.appendChild(buttons)

const buttonValues = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
]

buttonValues.forEach(value => {
    const button = document.createElement("button")
    button.textContent = value
    buttons.appendChild(button)

    button.addEventListener("click", () => {
        screen.textContent += value;
    })
})