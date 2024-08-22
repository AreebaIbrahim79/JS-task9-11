// taking input from user 
var color = prompt("Write color of road traffic signal");

if (color == "RED" || color == "Red" || color == "red") {
  alert("Must Stop");
} else if (color == "YELLOW" || color == "Yellow" || color == "yellow") {
  alert("Ready to move");
} else if (color == "GREEN" || color == "Green" || color == "green") {
  alert("Move now.");
} else {
  alert("Please enter a right color of road traffic signal.");
}