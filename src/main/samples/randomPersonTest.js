import {recognizePhoto} from "../api";
import {randomPerson} from "../infrastructure/swapi/SwApiCalls";

export async function randomPersonTest() {
    const person = await randomPerson();
    const recognizedPerson = await recognizePhoto("people", person.id);
    const isGoogleCorrect = person.name === recognizedPerson;
    console.table({
        'Person Name': person.name,
        'Google Vision API Answer': recognizedPerson,
        'Is Vision API correct': isGoogleCorrect
    });
    return isGoogleCorrect;
}
