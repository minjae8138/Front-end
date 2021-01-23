const main = document.querySelector("main")
const operators = main.querySelectorAll(".operator")
const numbers = Array.from(main.querySelectorAll(".numbers"))

const equal = main.querySelector(".equal")
const zero = main.querySelector(".zero")
const result = main.querySelector(".result")
const reset = main.querySelector(".reset");

console.log(numbers)
console.log(typeof (numbers))
console.log(b)
console.log(typeof (b))
let currentValue = 0;
let resultValue = 0;
let number = "";
let operator = "";
let a = 0;

function resetNum() {
    currentValue = 0;
    resultValue = 0;
    number = "";
    operator = "";
    result.innerText = "0";
}

function equalNum() {
    resultValue = parseFloat(resultValue)


    if (operator === "+") {
        resultValue = currentValue + resultValue;
        currentValue = ""
    } else if (operator === "-") {
        resultValue = resultValue - currentValue;
        currentValue = ""
    } else if (operator === "*") {
        resultValue = currentValue * resultValue;
        currentValue = 1
    } else if (operator === "/") {
        resultValue = resultValue / currentValue;
        currentValue = 1
    }
    result.innerText = resultValue;
}

function operatorNum(event) {
    const operatorBtn = event.target;
    const operatorValue = operatorBtn.value;
    number = "";

    switch (operator) {
        case "":
            operator = operatorValue;
        case "+":
            resultValue = currentValue + resultValue;
            operator = operatorValue;
            result.innerText = `${resultValue}`;
            break;
        case "-":
            resultValue = resultValue - currentValue;
            operator = operatorValue;
            result.innerText = `${resultValue}`;
            console.log(operator)
            break;
        case "*":
            resultValue = resultValue * currentValue;
            operator = operatorValue;
            result.innerText = `${resultValue}`;
            break;
        case "/":
            resultValue = resultValue / currentValue;
            operator = operatorValue;
            if (a !== 0) {
                result.innerText = `${resultValue}`
            } else {
                result.innerText = "0";
            }

            break;
    }
}

function paintNum(event) {
    const numberBtn = event.target;
    const numberValue = numberBtn.value;
    number = `${number}${numberValue}`
    result.innerText = number
    currentValue = parseInt(number);
    a = a + 1
}


numbers.forEach(function (numberBtn) {
    numberBtn.addEventListener("click", paintNum);
});

operators.forEach(function (operatorBtn) {
    operatorBtn.addEventListener("click", operatorNum);
})

reset.addEventListener("click", resetNum);
equal.addEventListener("click", equalNum);
zero.addEventListener("click", paintNum);
