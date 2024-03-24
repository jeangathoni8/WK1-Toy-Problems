// Here is an improved version of the 'calculateDemeritPoints' function:

/**
 * Calculates the demerit points for a given speed.
 * @returns {void}
 */
function calculateDemeritPoints() {
  const speedInput = document.getElementById('speedInput');
  const result = document.getElementById('result');

  const speed = Number(speedInput.value);
  const points = Math.floor((speed - 70) / 5);

  if (speed <= 70) {
    result.textContent = 'Ok';
  } else if (points > 12) {
    result.textContent = 'License suspended';
  } else {
    result.textContent = `Points: ${points}`;
  }
}