const swordTimer = document.querySelector('.swordTimer');
const swordNormal = document.querySelector('.swordNormal');
swordTimer.style.width = '100%';
swordNormal.style.width = '0%';
let widthNormal = 0;
let widthTimer = 100;
let counter = 0;
const timeleft = 60; // limit czasu

function setup () {

    const timer = document.querySelector('#timer');
    timer.textContent = (timeleft - counter);

    function timeIt() {
        counter++;
        timer.textContent = (timeleft - counter);
            widthTimer -=1.666;
            widthNormal +=1.666;
            console.log(` ${widthNormal} %`);
            swordTimer.style.width = `${widthTimer}%`;
            swordNormal.style.width = `${widthNormal}%`;
            
        if (counter === timeleft) {
            clearInterval(interval);
            counter = 0;
        }
    }
   const interval = setInterval(timeIt, 1000);
}

setup();