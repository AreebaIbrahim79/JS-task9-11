//input from user 
var number = Number(prompt("Enter a number to check if it is even or odd:"));

// Check if the number is even or odd
if (number % 2 === 0) {
    alert("The number " + number + " is an even number.");
} else {
   alert("The number " + number + " is an odd number.");
}