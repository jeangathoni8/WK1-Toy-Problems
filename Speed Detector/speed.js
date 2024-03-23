//Listen for the button click event.
function calculateDemeritPoints() {
    //Get the value from the input field.
    const speed = document.getElementById('speedInput').value;
    const result = document.getElementById('result');
//Calculate the demerit points if speed is above 70 km/s. (For every 5 km/s over 70, add one point.)
let  demerits;
    if (speed <= 70) {
        //Display “Ok” if speed is below or equal to 70.
      result.textContent = 'Ok';
    } else {
        //Display “Points: X” where X is the number of demerit points if speed is above 70 but points are 12 or less.
      const points = Math.floor((speed - 70) / 5);
      if (points > 12) {
        //Display “License suspended” if the points are more than 12.
        result.textContent = 'License suspended';
      } else {
        result.textContent = `Points: ${points}`;
      }
    }
  }