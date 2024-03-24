//Add button click event for calculating demerit points
function calculateDemeritPoints() {
  const result = document.getElementById('result');

  const speed = parseInt(document.getElementById('speedInput').value);
//To Evaluate the speed
  if (!speed) {
    result.textContent = 'Enter speed in km/h';
    return;
  }
//Calculating the speed for demerit points
  const points = Math.floor((speed - 70) / 5);

  if (speed <= 70) {
    result.textContent = 'Ok';
  } else if (points > 12) {
    result.textContent = 'License suspended';
  } else {
    result.textContent = `Points: ${points}`;
  }
}

// Immediate  execution function to add an event listener
document.getElementById('speedForm').addEventListener('submit', (event) => {
  event.preventDefault();
  calculateDemeritPoints();
});