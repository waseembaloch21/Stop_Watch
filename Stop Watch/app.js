let mins = document.getElementById('mins')
let sec = document.getElementById('sec')
let millisec = document.getElementById('millisec')

let milliseconds = 0;
let seconds = 0;
let mintus = 0;

let watchInterval;

function start() {
    watchInterval = setInterval(() => {
        milliseconds++
        if (milliseconds >= 99) {
            seconds++
            milliseconds = 0
        }
        if (seconds >= 59) {
            mintus++
            seconds = 0
        }
        millisec.innerText = milliseconds
        sec.innerText = seconds < 10 ? '0' + seconds : seconds
        mins.innerText = mintus < 10 ? '0' + mintus : mintus
    }, 10);
}

function reset() {
    clearInterval(watchInterval)
    mintus = 0;
    seconds = 0;
    milliseconds = 0;
    mins.innerText = 0
    sec.innerText = 0
    millisec.innerText = 0

}

function stop() {
    clearInterval(watchInterval)

}
