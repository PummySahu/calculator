let result = document.getElementById("result");
let currentResult = "0";

function appendNumber(number) {
    if (currentResult === "0") {
    currentResult = number;
    } else {
    currentResult += number;
    }
    result.innerText = currentResult;
}

function appendOperator(operator) {
    currentResult += operator;
    result.innerText = currentResult;
}

function appendDecimal() {
    if (!currentResult.includes(".")) {
    currentResult += ".";
    result.innerText = currentResult;
    }
}

function calculate() {
    try {
    currentResult = eval(currentResult);
    result.innerText = currentResult;
    } catch (error) {
    result.innerText = "Error";
    }
}

function clearResult() {
    currentResult = "0";
    result.innerText = currentResult;
}