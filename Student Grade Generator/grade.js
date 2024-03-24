//Capture the input from the user.
function calculateGrade() {
    const marksInput = document.getElementById("marksInput").value;
    const marks = marksInput.value;
    //Validate the input to ensure it's between 0 and 100.
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert('Please enter a number between  0 and 100');
        marksInput.focus();
        return false;
}
}
//Determine the grade based on the input marks.
if (marks > 79) {
    grade = 'A';
} else if (marks >= 60) {
    grade = 'B';
} else if (marks >= 50) {
    grade = 'C';
} else if (marks >= 40) {
    grade = 'D';
} else if (marks < 40) {
    grade = 'E';
}

//Display grade to the user
alert ('Your Grade is: ' + grade);

//Resets the content of the 'gradeOutput' element when the reset button is clicked.
function resetGrade() {
    const gradeOutput = document.getElementById('gradeOutput');
    if gradeOutput.innerHTML = '';
    if (gradeOutput.innerHTML !== '' ) {
        gradeOutput.innerHTML = 'Submit';
        }
    }


