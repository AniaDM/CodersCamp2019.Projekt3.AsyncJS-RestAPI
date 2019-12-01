import {recognizePhoto} from "../api";
import {randomPerson} from "../infrastructure/swapi/SwApiCalls";

export async function randomPersonTest() {
    const person = await randomPerson();
    const recognizedPerson = await recognizePhoto("people", person.id);
    const isGoogleCorrect = person.name === recognizedPerson;
    console.table([person.name, recognizedPerson, isGoogleCorrect]);
    return isGoogleCorrect;
}
