function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let num1 = 3;
let operator = "+";
let num2 = 5;

function operation(num1, operator, num2) {
  const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
  };

  const calculate = operations[operator];
  return calculate ? calculate(num1, num2) : "Invalid operator";
}

console.log(operation(7, "+", 5));
// console.log(add(1, 1));
// console.log(subtract(1, 1));
// console.log(multiply(1, 1));
// console.log(divide(1, 1));
