function rand(min, max, answerId) {
    min = parseInt(min, 10);
    max = parseInt(max, 10);

    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }

    let number = Math.floor(Math.random() * (max - min + 1) + min)

    for (let i = 0; number === answerId; i++) {
        number = Math.floor(Math.random() * (max - min + 1) + min)
    }

    return number
}

const idOfFirstPerson = 1
const idOfLastPerson = 87

export function threeRandomNames(answer) {

    let answerId
    if (typeof answer === 'number') {
        answerId = answer
    } else if (typeof answer === 'string') {
        answerId = fetch('https://swapi.co/api/people/?search=' + answer)
            .then(resp => resp.json())
            .then(resp => {
                if (resp.url.length === 30) {
                    return resp.url[28]
                } else if (resp.url.length === 31) {
                    return resp.url.substr(28, 2)
                }
            })
    }

    const setOfPeopleId = new Set()
    for (let i = 0; setOfPeopleId.size < 3; i++) {
        setOfPeopleId = setOfPeopleId.add(rand(idOfFirstPerson, idOfLastPerson, answerId))
    }

    const arrayOfPeopleId = Array.from(setOfPeopleId)

    const firstId = arrayOfPeopleId[0]
    const secondId = arrayOfPeopleId[1]
    const thirdId = arrayOfPeopleId[2]

    const nameOne = fetch('https://swapi.co/api/people/' + firstId + '/')
        .then(resp => resp.json())
        .then(resp => resp.name)

    const nameTwo = fetch('https://swapi.co/api/people/' + secondId + '/')
        .then(resp => resp.json())
        .then(resp => resp.name)

    const nameThree = fetch('https://swapi.co/api/people/' + thirdId + '/')
        .then(resp => resp.json())
        .then(resp => resp.name)

    const names = [nameOne, nameTwo, nameThree]
    return names
}