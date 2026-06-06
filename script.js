const millisec = document.querySelector('.milliseconds')
const sec = document.querySelector('.seconds')
const min = document.querySelector('.minutes')
const startStopBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.stop');

let milliNum = 0
let secNum = 0
let minNum = 0
let INTERVAL

function milliseconds() {
    milliNum++
    if (milliNum < 10) {
        millisec.innerHTML = '0' + milliNum
    } else {
        millisec.innerHTML = milliNum
    }
    
    if (milliNum >= 100) {
        milliNum = 0
        millisec.innerHTML = '00'
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
        sec.innerHTML = '00'
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

    if (startStopBtn.innerText.trim().toUpperCase() === 'START') {
        startStopBtn.innerText = 'RESUME'
    }
}

function reset() {
    clearInterval(INTERVAL)
    milliNum = 0
    secNum = 0
    minNum = 0
    millisec.innerHTML = '00'
    sec.innerHTML = '00'
    min.innerHTML = '00'

    startStopBtn.innerText = 'START';
}

