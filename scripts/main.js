const input = document.querySelector(".form__input");
const btn = document.querySelector(".form__button");
const timer = document.querySelector(".timer__seconds");

btn.addEventListener('click', () => {
    let seconds = +input.value;
    if (seconds <= 0) {
        seconds = 0;
        input.value = 0;
    }
    else {
        setTimer(seconds);
    }
});

let currentTime = 0;
let interval;

function setTimer(t) {
    currentTime = t;
    timer.innerText = currentTime;

    interval = setInterval(() => {

        currentTime--;
        timer.innerText = currentTime;

        if (currentTime === 0) {
            clearInterval(interval);
            // console.log("Время истекло!");
            
            let aud = new Audio('audio/teddy_alert.mp3');
            aud.play();
        }

    }, 1000);
}