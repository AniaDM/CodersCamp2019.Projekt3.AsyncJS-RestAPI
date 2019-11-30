const answerV1 = document.querySelector('.answer1');
const answerV2 = document.querySelector('.answer2');
const answerV3 = document.querySelector('.answer3');
const answerV4 = document.querySelector('.answer4');

class ItemAnswer {
    constructor(vehicleChange) {
        this.answer1GoodAnswer = vehicleChange[0]; //zmienna z dobrym pytaniem
        this.answer2BadAnswer = vehicleChange[1];
        this.answer3BadAnswer = vehicleChange[2];
        this.answer4BadAnswer = vehicleChange[3];
    }
}

function getRandomIndex(length) {
    return Math.floor(Math.random() * length)
}

const responsesProvided = ['good', 'bad1', 'bad2', 'bad3']; //zmienna do przekazywania 4 odpowiedzi, na pierwszym miejscu dobra odpowiedz.

const answerSet = new ItemAnswer(responsesProvided);

let randomNumber = getRandomIndex(4);

const arrangementTable = [];

arrangementTable[randomNumber] = answerSet.answer1GoodAnswer;
(randomNumber >= 3) ? randomNumber = 0: randomNumber++;

arrangementTable[randomNumber] = answerSet.answer2BadAnswer;
(randomNumber >= 3) ? randomNumber = 0: randomNumber++;

arrangementTable[randomNumber] = answerSet.answer3BadAnswer;
(randomNumber >= 3) ? randomNumber = 0: randomNumber++;

arrangementTable[randomNumber] = answerSet.answer4BadAnswer;

answerV1.innerText = arrangementTable[0];
answerV2.innerText = arrangementTable[1];
answerV3.innerText = arrangementTable[2];
answerV4.innerText = arrangementTable[3];

answerV1.style.color = 'black';
answerV2.style.color = 'black';
answerV3.style.color = 'black';
answerV4.style.color = 'black';