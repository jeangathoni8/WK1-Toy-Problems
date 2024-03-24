//Capture the input from the user.
function calculateGrade() {
    const marks = document.getElementById("marksInput").value;
    let grade;
    //Validate the input to ensure it's between 0 and 100.
    if (marks < 0 || marks > 100) {
        alert('Marks must be between 0 and 100.');
        return;
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

//Resets the content of the 'gradeOutput' element when the reset button is clicked.
function resetGrade() {
    const gradeOutput = document.getElementById('gradeOutput');
    if gradeOutput.innerHTML = '';
    if (gradeOutput.innerHTML !== '' ) {
        gradeOutput.textContent = 'Submit';
        }
    }


