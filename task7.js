// Store number between 1 and 10
var secretNumber = 7;

// taking user input
var userGuess = Number(prompt("Guess the secret number (between 1 and 10):"));

// Check the condition
if (userGuess === secretNumber) {
   alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
    document.write("Close enough to the correct answer");
} else {
    document.write("Oops! Incorrect guess. The secret number was: " + secretNumber);
}