// initalizing variable
var gender = prompt("Enter Your Gender");

if (gender == "MALE" ||gender == "Male" || gender == "male") {
 document.write("Good Morning Sir.");
} 
else if (gender == "FEMALE" ||gender == "Female" || gender == "female") {
    document.write("Good Morning Ma’am.");
}
else{
    alert("select agian.");
}