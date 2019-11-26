const swordTimer = document.querySelector('.sword-timer');

swordTimer.style.width = '100%';

let widthNormal = 0;
let widthTimer = 100;
let counter = 0;
const timeleft = 60; // limit czasu

function setup () {

    const timer = document.querySelector('#timer');
    timer.textContent = `Time Left: ${(timeleft - counter)}`;

    function timeIt() {
        counter++;
        timer.textContent = `Time Left: ${(timeleft - counter)}`;
            widthTimer -=1.666;
            
            console.log(` ${widthNormal} %`);
            
            swordTimer.style.width = `${widthTimer}%`;
         
            
        if (counter === timeleft) {
            clearInterval(interval);
            counter = 0;
        }
    }
   const interval = setInterval(timeIt, 1000);
}

setup();