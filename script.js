// hands
const ss = document.querySelector(".second");
const mm = document.querySelector(".minute");
const hh = document.querySelector(".hour");


// set time
function setTime() {
    const date = new Date();

    setSeconds(date.getSeconds());
    setMinutes(date.getMinutes());
    setHours(date.getHours());
}
setInterval(setTime, 1000);

// time functions
function setSeconds(secs) {
    const secsDeg = (((secs/60)*360) + 5);
    ss.style.transform = `rotate(${secsDeg}deg)`;
}

function setMinutes(mins) {
    const minsDeg = ((mins/60)*360);
    mm.style.transform = `rotate(${minsDeg}deg)`;
}

function setHours(hours) {
    const hoursDeg = ((hours/12)*360);
    hh.style.transform = `rotate(${hoursDeg}deg)`;
}