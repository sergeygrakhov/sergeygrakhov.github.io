var buttonFunction = {
    start: 'Start',
    pause: 'Pause',
    continue: 'Continue',
    clear: 'Clear'
};
var time = {
    hour : 0,
    min : 0,
    sec : 0,
    msec : 0
};
var pause =  {
    hour : 0,
    min : 0,
    sec : 0,
    msec : 0
};
var timeCalc = 0;
var timeCalcContinue = 0;
var choise = 0;
var i = 1;
var j = 1;
var body = document.body;
var wrapper = document.createElement('div');
var header = document.createElement('header');
var timerWindow = document.createElement('div');
var dots = document.createElement('span');
var dots2 = document.createElement('span');
var timerWindowHour = document.createElement('span');
var timerWindowMinutes = document.createElement('span');
var timerWindowSeconds = document.createElement('span');
var timerWindowMillisec = document.createElement('p');
var startStopButton = document.createElement('input');
var clearButton = document.createElement('input');
    wrapper.classList.add('wrapper');
    body.appendChild(wrapper);
    header.innerHTML = "Таймер дз 5-6";
    wrapper.appendChild(header);
    timerWindow.classList.add('timer__window');
    wrapper.appendChild(timerWindow);
    dots.innerHTML = ":";
    dots2.innerHTML = ":";
    timerWindowHour.innerHTML= '0' + time.hour;
    timerWindow.appendChild(timerWindowHour);
    timerWindow.appendChild(dots);
    timerWindowMinutes.innerHTML='0' + time.min;
    timerWindow.appendChild(timerWindowMinutes);
    timerWindow.appendChild(dots2);
    timerWindowSeconds.innerHTML = '0' + time.sec;
    timerWindow.appendChild(timerWindowSeconds);
    timerWindowMillisec.innerHTML = '00' + time.msec;
    timerWindow.appendChild(timerWindowMillisec);
    startStopButton.classList.add('start__stop');
    startStopButton.type = 'button';
    startStopButton.value = buttonFunction.start;
    wrapper.appendChild(startStopButton);
    clearButton.classList.add('clear');
    clearButton.type = 'button';
    clearButton.value = buttonFunction.clear;
    wrapper.appendChild(clearButton);
function timer() {
    switch (choise){
    case 1:
        timeCalc = setInterval(function () {
            timerWindowMillisec.innerHTML = time.msec.toString();
            if (time.sec.toString().length == 1) {
                timerWindowSeconds.innerHTML = '0' + time.sec;
            } else {
                timerWindowSeconds.innerHTML = time.sec.toString();
            }
            if (time.min.toString().length == 1) {
                timerWindowMinutes.innerHTML = '0' + time.min;
            } else {
                timerWindowMinutes.innerHTML = time.min.toString();
            }
            if (time.hour.toString().length == 1) {
                timerWindowHour.innerHTML = '0' + time.hour;
            } else {
                timerWindowHour.innerHTML = time.hour.toString();
            }
            if (time.sec.toString().length == 1) {
                timerWindowSeconds.innerHTML = '0' + time.sec;
            } else {
                timerWindowSeconds.innerHTML = time.sec.toString();
            }
            if (j == 250) {
                clearInterval(timeCalc);
                time.sec += 1;
                j = 1;
                timer();
                if (time.sec == 60) {
                    time.sec = 0;
                    time.min += 1;
                    if (time.min == 60) {
                        time.min = 0;
                        time.hour += 1;
                    }
                }
            }
            j++;
             time.msec = j * 4 - 1;
        }, 4);
        break;
        case 2:
            pause.min = time.min;
            pause.sec = time.sec;
            pause.hour = time.hour;
            pause.msec = time.msec;
            i = j;
        break;
        case 3:
                timeCalcContinue = setInterval(function () {
                timerWindowMillisec.innerHTML = pause.msec.toString();
                if (time.sec.toString().length == 1) {
                    timerWindowSeconds.innerHTML = '0' + pause.sec;
                } else {
                    timerWindowSeconds.innerHTML = pause.sec.toString();
                }
                if (time.min.toString().length == 1) {
                    timerWindowMinutes.innerHTML = '0' + time.min;
                } else {
                    timerWindowMinutes.innerHTML = pause.min.toString();
                }
                if (time.hour.toString().length == 1) {
                    timerWindowHour.innerHTML = '0' + pause.hour;
                } else {
                    timerWindowHour.innerHTML = pause.hour.toString();
                }
                if (time.sec.toString().length == 1) {
                    timerWindowSeconds.innerHTML = '0' + pause.sec;
                } else {
                    timerWindowSeconds.innerHTML = pause.sec.toString();
                }
                if (i == 250) {
                    clearInterval(timeCalcContinue);
                    pause.sec += 1;
                    i = 1;
                    timer();
                    if (pause.sec == 60) {
                        pause.sec = 0;
                        pause.min += 1;
                        if (pause.min == 60) {
                            pause.min = 0;
                            pause.hour += 1;
                        }
                    }
                }
                    i++;
                    pause.msec = i * 4 - 1;
            }, 4);
            time.min = pause.min;
            time.sec = pause.sec;
            time.hour = pause.hour;
            time.msec = pause.msec;
            break;
    }
}
function handler() {
    switch (startStopButton.value) {
        case buttonFunction.start:
            startStopButton.value = buttonFunction.pause;
            startStopButton.setAttribute("id", "active");
            choise = 1;
            timer();
            break;
        case buttonFunction.pause:
            startStopButton.value = buttonFunction.continue;
            startStopButton.removeAttribute("id");
            choise = 2;
            clearInterval(timeCalc);
            clearInterval(timeCalcContinue);
            timer();
            break;
        case buttonFunction.continue:
            startStopButton.value = buttonFunction.pause;
            startStopButton.setAttribute("id", "active");
            choise = 3;
            timer();
            break;
        }
    }
function clearHandler() {
    startStopButton.value = buttonFunction.start;
    time.msec = 0;
    time.hour = 0;
    time.min = 0;
    time.sec = 0;
    pause.min = 0;
    pause.sec = 0;
    pause.hour = 0;
    pause.msec = 0;
    i=1;
    j=1;
    clearInterval(timeCalc);
    clearInterval(timeCalcContinue);
    timerWindowMillisec.innerHTML = '00'+ time.msec;
    timerWindowHour.innerHTML = '0'+ time.hour;
    timerWindowMinutes.innerHTML = '0'+ time.min;
    timerWindowSeconds.innerHTML = '0'+ time.sec;
    startStopButton.removeAttribute("id");
    //startStopButton.removeEventListener("click", handler);
   // startStopButton.addEventListener("click", handler);
}
    startStopButton.addEventListener("click", handler);
    clearButton.addEventListener("click", clearHandler);