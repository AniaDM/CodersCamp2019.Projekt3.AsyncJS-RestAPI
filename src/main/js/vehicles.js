<<<<<<<
const URL = 'https://swapi.co/api/vehicles/';
const LIST = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 42];
const ASSETSV = '../../assets/img/modes/vehicles/'

const answerV1 = document.querySelector('.answer1');
const answerV2 = document.querySelector('.answer2');
const answerV3 = document.querySelector('.answer3');
const answerV4 = document.querySelector('.answer4');
pictureQuiz = document.querySelector('.lord-vader-pic');
const vehicleNumbers = [0, 0, 0];
const vehicle = [];

function getRandomIndex(length) {
    return Math.floor(Math.random() * length)
}

const vehicleSelection = LIST.splice(getRandomIndex((LIST.length)), 1);
console.log(vehicleSelection);

pictureQuiz.src = `${ASSETSV}${vehicleSelection}.jpg`;

for (let i = 0; i < 3; i++) {
    vehicleNumbers[i] = LIST[getRandomIndex(LIST.length)];
    if (vehicleNumbers[0] === vehicleNumbers[1] || vehicleNumbers[0] === vehicleNumbers[2] || vehicleNumbers[0] === vehicleNumbers[2]) {
        i--
    }
}

const vehicle0 = fetch(`${URL}${vehicleSelection}`)
    .then(response => response.json())
    .then(data => data.name)
    .catch(err => console.log(error))

vehicle1 = fetch(`${URL}${vehicleNumbers[0]}`)
    .then(response => response.json())
    .then(data => data.name)
    .catch(err => console.log(error)),

    vehicle2 = fetch(`${URL}${vehicleNumbers[1]}`)
    .then(response => response.json())
    .then(data => data.name)
    .catch(err => console.log(error)),

    vehicle3 = fetch(`${URL}${vehicleNumbers[2]}`)
    .then(response => response.json())
    .then(data => data.name)
    .catch(err => console.log(error)),

    Promise.all([vehicle0, vehicle1, vehicle2, vehicle3])
    .then(result => {
        vehicle.push(result);
        const vehicleChange = vehicle[0];

        let randomNumber = getRandomIndex(4); //test - zmienić nazwę zmiennej

        console.log(randomNumber); //sprawdzenie

        answerV1.innerText = vehicleChange[randomNumber];
        if (randomNumber === 3) {
            randomNumber = 0
        } else randomNumber++

        answerV2.innerText = vehicleChange[randomNumber];
        if (randomNumber === 3) {
            randomNumber = 0
        } else randomNumber++

        answerV3.innerText = vehicleChange[randomNumber];
        if (randomNumber === 3) {
            randomNumber = 0
        } else randomNumber++

        answerV4.innerText = vehicleChange[randomNumber];
        if (randomNumber === 3) {
            randomNumber = 0
        } else randomNumber++

        console.log(vehicleChange[0]); //sprawdzenie

        answerV1.style.color = 'black';
        answerV2.style.color = 'black';
        answerV3.style.color = 'black';
        answerV4.style.color = 'black';

    });
=======
const URL = 'https://swapi.co/api/vehicles/';
const LIST = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 42];

const answerV1 = document.querySelector('.answer1');
const answerV2 = document.querySelector('.answer2');
const answerV3 = document.querySelector('.answer3');
const answerV4 = document.querySelector('.answer4');

;
function getRandomIndex(length) {
    return Math.floor(Math.random() * length)
}

const vehicleSelection = LIST.splice(getRandomIndex((LIST.length)),1);

console.log(vehicleSelection);

pictureQuiz = document.querySelector('.lord-vader-pic');

pictureQuiz.src = `../../assets/img/modes/vehicles/${vehicleSelection}.jpg`; 

let newPicVehicle;
fetch(`${URL}${vehicleSelection}`)
    .then(response => response.json())
    .then(data => newPicVehicle = data.name)
    .catch(err => console.log(error))

let losowanie = getRandomIndex(length);

let test;

const vehicleNumbers = [ 0, 0 , 0 ];

for (let i = 0; i < 3; i++) {
    vehicleNumbers[i] = LIST[getRandomIndex(LIST.length)];
  
    if (vehicleNumbers[0] === vehicleNumbers[1] || vehicleNumbers[0] === vehicleNumbers[2] || vehicleNumbers[0] === vehicleNumbers[2]) { i-- }
    
}
console.log(vehicleNumbers);
const vehicle = [];
fetch(`${URL}${vehicleNumbers[0]}`)
    .then(response => response.json())
    .then(data => vehicle[0] = data.name)
    .catch(err => console.log(error)),
    
    fetch(`${URL}${vehicleNumbers[1]}`)
    .then(response => response.json())
    .then(data => vehicle[1] = data.name)
    .catch(err => console.log(error)),

    fetch(`${URL}${vehicleNumbers[2]}`)
    .then(response => response.json())
    .then(data => vehicle[2] = data.name)
    .catch(err => console.log(error))

answerV1.innerText = vehicle[0];
answerV2.innerText = vehicle[1];


>>>>>>>