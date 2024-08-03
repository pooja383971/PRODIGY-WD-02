let timer; // Timer variable
let time = 0; // Time in seconds
let running = false; // Flag to check if stopwatch is running

function startStop() {
  if (running) {
    clearInterval(timer);
    document.getElementById('startStopButton').textContent = 'Start';
  } else {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById('startStopButton').textContent = 'Stop';
  }
  running = !running;
}

function reset() {
  clearInterval(timer);
  time = 0;
  running = false;
  updateDisplay();
  document.getElementById('startStopButton').textContent = 'Start';
}

function updateDisplay() {
  time++;
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;
  
  // Format numbers to ensure two digits
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`;
}
