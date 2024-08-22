// Taking input for marks obtained in three subjects  
var marksSubject1 = parseInt(prompt("Enter marks obtained in subject 1:"), 10);  
var marksSubject2 = parseInt(prompt("Enter marks obtained in subject 2:"), 10);  
var marksSubject3 = parseInt(prompt("Enter marks obtained in subject 3:"), 10);  
// Total marks for each subjects
var totalMarks = 300;  

// Total marks obtained  
var totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3;  

// Percentage  
var percentage = (totalObtainedMarks / totalMarks) * 100;  

//grade based on the percentage
var  grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

// Displaying the marks sheet
document.write("<h1>Marks Sheet </h1>" );
document.write("Total marks: " + totalMarks +"</br>");
document.write("Marks obtained: " + totalObtainedMarks +"</br>");
document.write("Percentage: " + percentage + "%" +"</br>");
document.write("Grade: " + grade +"</br>");
document.write("Remarks: " + remarks);





