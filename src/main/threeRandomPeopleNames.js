function rand(min, max, answerId) {
    min = parseInt(min, 10);
    max = parseInt(max, 10);

    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }

    let number = Math.floor(Math.random() * (max - min + 1) + min)

    for (let i = 0; number === answerId || number === 17; i++) {
        number = Math.floor(Math.random() * (max - min + 1) + min)
    }

    return number
}

const idOfFirstPerson = 1
const idOfLastPerson = 87

function extractIdFromUrl(answer) {
    fetch('https://swapi.co/api/people/?search=' + answer)
        .then(resp => {
            if (resp.url.length === 30) {
                return resp.url[28]
            } else if (resp.url.length === 31) {
                return resp.url.substr(28, 2)
            }
        })
}

export function threeRandomNamesExpectOf(answer) {

    const answerId = (typeof answer === 'number') ?
        answer :
        extractIdFromUrl(answer);

    const setOfPeopleId = new Set()
    for (let i = 0; setOfPeopleId.size < 3; i++) {
        setOfPeopleId.add(rand(idOfFirstPerson, idOfLastPerson, answerId))
    }

    const personPromises = [...setOfPeopleId].map(
        personId =>
        fetch('https://swapi.co/api/people/' + personId + '/')
        .then(resp => resp.json())
        .then(resp => resp.name)
    );
    return Promise.all(personPromises)
}