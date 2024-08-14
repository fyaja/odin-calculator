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

let num1 = 0;
let operator;
let num2;

function operate(num1, operator, num2) {
  const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
  };

  const calculate = operations[operator];
  return calculate ? calculate(num1, num2) : "Invalid operator";
}

function updateResult(value) {
  const result = document.querySelector(".result");
  result.innerText = value;
}

function resetCalculator() {
  num1 = 0;
  operator = undefined;
  num2 = undefined;
}

updateResult(num1);

document.querySelectorAll(".number").forEach((number) => {
  number.addEventListener("click", () => {
    const value = parseInt(number.value);
    if (!operator) {
      num1 = num1 ? num1 * 10 + value : value;
      updateResult(num1);
    } else {
      num2 = num2 ? num2 * 10 + value : value;
      updateResult(num2);
    }
  });
});

document.querySelectorAll(".operator button").forEach((btn) => {
  btn.addEventListener("click", () => {
    operator = btn.value;
  });
});

document.querySelector(".equal").addEventListener("click", () => {
  if (!operator || !num2) {
    updateResult("Error");
    resetCalculator();
    return;
  }
  const result = operate(num1, operator, num2);
  updateResult(result);
  resetCalculator();
});

document.querySelector(".clear").addEventListener("click", () => {
  resetCalculator();
  updateResult(num1);
});
