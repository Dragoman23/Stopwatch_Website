const millisec = document.querySelector('.milliseconds')
const sec = document.querySelector('.seconds')
const min = document.querySelector('.minutes')
const hour = document.querySelector('.hours')
const startStopBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.stop');

let milliNum = 0
let secNum = 0
let minNum = 0
let hourNum = 0
let INTERVAL

function milliseconds() {
    milliNum++
    if (milliNum < 10) {
        millisec.innerHTML = '0' + milliNum
    } else {
        millisec.innerHTML = milliNum
    }
    
    if (milliNum >= 99) {
        milliNum = 0
        seconds()
    }
}

function seconds() {
    secNum++
    if (secNum < 10) {
        sec.innerHTML = '0' + secNum
    } else {
        sec.innerHTML = secNum
    }
    
    if (secNum >= 60) {
        secNum = 0
        minutes()
    }
}

function minutes() {
    minNum++
    if (minNum < 10) {
        min.innerHTML = '0' + minNum
    } else {
        min.innerHTML = minNum
    }
    if (minNum >= 60) {
        minNum = 0
        hours()
    }
}

function hours() {
    hourNum++
    if (hourNum < 10) {
        hour.innerHTML = '0' + hourNum
    } else {
        hour.innerHTML = hourNum
    }    
}

function start() {
    clearInterval(INTERVAL)
    INTERVAL = setInterval(() =>  {
        milliseconds()
    }, 10)

   if (startStopBtn.innerText.trim().toUpperCase() === 'RESUME') {
    startStopBtn.innerText = 'START'
   }
}

function stopTimer() {
    clearInterval(INTERVAL);

    if (startStopBtn.innerText.trim().toUpperCase() === 'START' && millisec > 0) {
        startStopBtn.innerText = 'RESUME'
    }
}

function reset() {
    clearInterval(INTERVAL)
    milliNum = 0
    secNum = 0
    minNum = 0
    hourNum = 0
    millisec.innerHTML = '00'
    sec.innerHTML = '00'
    min.innerHTML = '00'
    hour.innerHTML = '00'

    startStopBtn.innerText = 'START';
}

