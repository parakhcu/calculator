let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let result = 0;

function clearDisplay() {
  display.value = '';
  currentInput = '';
  currentOperator = '';
  result = 0;
}

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function appendOperator(operator) {
  currentOperator = operator;
  currentInput += ' ' + operator + ' ';
  display.value = currentInput;
}

function calculateResult() {
  let expression = currentInput.split(' ');

  if (expression.length === 3) {
    let num1 = parseFloat(expression[0]);
    let op = expression[1];
    let num2 = parseFloat(expression[2]);

    switch (op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 0;
    }

    display.value = result;
    currentInput = result.toString();
  }
}
