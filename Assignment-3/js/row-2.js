var historyField = document.getElementById("history");
var resultField = document.getElementById("current");

var current = "0";
var previous = 0;
var typedString = "";
var calculated = 0;
var next = "";
var operatorPrevious;

function appendNumber(number) {
    current = current + number;
    resultField.value = current;
}

function operator(operator) {
    typedString = typedString + current + ' ' + operator + ' ';
    calculateValue();
    operatorPrevious = operator;
    current = "";
    historyField.value = typedString;
    calculated = previous;
    calculated == 0 ? resultField.value = "" : resultField.value = calculated;
}

function calculateValue() {
    switch (operatorPrevious) {
        case '+': {
            previous = previous + parseInt(current);
            break;
        }
        case '-': {
            previous = previous - parseInt(current);
            break;
        }
        case '*': {
            previous = previous * parseInt(current);
            break;
        }
        case '/': {
            previous = previous / parseInt(current);
            break;
        }
        case '=': {
            // typedString = previous;
        }
        default: {
            previous = parseInt(current);
        }
    }
}

function showResult() {
    typedString = typedString + current + ' ' + '=' + ' ';
    calculateValue();
    operatorPrevious = '=';
    current = previous;
    historyField.value = typedString;
    calculated = previous;
    calculated == NaN ? resultField.value = "" : resultField.value = calculated;
}

function reset() {
    calculated = "0";
    previous = 0;
    typedString = "";
    resultField.value = "";
    historyField.value = "";
}