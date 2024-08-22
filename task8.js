// Prompt the user to enter a number
var number = Number(prompt("Enter a number to check if it is divisible by 3:"));

// Check if the number is divisible by 3
if (number % 3 === 0) {
    alert("Yes, the number " + number + " is divisible by 3.");
} else {
    alert("No, the number " + number + " is not divisible by 3.");
}