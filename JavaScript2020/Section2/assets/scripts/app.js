const defaultResult = 0;
let currentResult = defaultResult;

currentResult = defaultResult + 10 * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 -1`;
let errorMessage = 'An error \n occured';
console.log(errorMessage);

outputResult(currentResult, calculationDescription);