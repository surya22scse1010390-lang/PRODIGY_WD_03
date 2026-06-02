let startTime;
let elapsedTime = 0;
let timerInterval;

function formatTime(time) {
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let milliseconds = time % 1000;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}

function printTime() {
    document.getElementById('display').innerHTML = formatTime(elapsedTime);
}

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printElapsedTime() {
        elapsedTime = Date.now() - startTime;
        printTime();
    }, 10);
}

function pauseStopwatch() {
    clearInterval(timerInterval);
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    printTime();
    document.getElementById('laps').innerHTML = '';
}

function recordLap() {
    let lapTime = elapsedTime;
    let lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${document.getElementById('laps').children.length + 1}: ${formatTime(lapTime)}`;
    document.getElementById('laps').appendChild(lapItem);
}
