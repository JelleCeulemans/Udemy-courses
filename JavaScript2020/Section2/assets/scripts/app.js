const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

const operators = {
    '+': 'ADD',
    '-': 'ABSTRACT',
    '*': 'MULTIPLY',
    '/': 'DIVIDE'
}

const getUserNumberInput = () => {
  return +userInput.value;
};

const createAndWriteOutput = (operator) => {
  const initialResult = currentResult;
  const calcDescription = `${initialResult} ${operator} ${getUserNumberInput()}`;
  currentResult = eval(currentResult + operator + getUserNumberInput());
  outputResult(currentResult, calcDescription);
  logEntry(operator, initialResult, currentResult);
};

const logEntry = (operator, prevResult, result) => {
  const enrty = {
    operation: operators[operator],
    prevResult,
    number: getUserNumberInput(),
    result,
  };
  logEntries.push(enrty);
  console.log(logEntries);
};

addBtn.addEventListener("click", () => {
  createAndWriteOutput("+");
});

subtractBtn.addEventListener("click", () => {
  createAndWriteOutput("-");
});

multiplyBtn.addEventListener("click", () => {
  createAndWriteOutput("*");
});

divideBtn.addEventListener("click", () => {
  createAndWriteOutput("/");
});
