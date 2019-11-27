function questionPhoto(id) {
    return "../../assets/img/modes/vehicles/" + id + ".jpg"
}

function rand(min, max) {
    min = parseInt(min, 10);
    max = parseInt(max, 10);

    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }

    return number = Math.floor(Math.random() * (max - min + 1) + min)
}

const availablePhotos = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 42]

export function randomPhoto() {
    const min = 0
    const max = 19
    const number = rand(min, max)
    return questionPhoto(availablePhotos[number])
}