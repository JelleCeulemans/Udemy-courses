const defaultResult = 0;
let currentResult = defaultResult;


currentResult = add(4 , 5);


let calculationDescription = `(${defaultResult} + 10) * 3 / 2 -1`;
let errorMessage = 'An error \n occured';
console.log(errorMessage);

outputResult(currentResult, calculationDescription);

const add = (num1, num2) => {
    return num1 + num2;
}
