// taking user inputs
var firstNumber = Number(prompt("Enter the first number:"));
var secondNumber = Number(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

// Perform the calculation
var result;
if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '/') {
    result = firstNumber / secondNumber;
} else if (operation === '%') {
    result = firstNumber % secondNumber;
} else {
   alert("Invalid operation. Please enter a valid operation: +, -, *, /, %");
}

// Display the calculated result
if (result !== undefined) {
 document.write("The result of " + firstNumber + " " + operation + " " + secondNumber + " is: " + result);
}