import Mode from './mode';
const URL = 'https://swapi.co/api/starships/';
const LIST = [5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27, 28, 29, 31, 39, 40, 41, 43, 47, 48];

export default class Starship extends Mode {
    constructor() {
        super();
        this.listOfResources = LIST;
    }
    getRandomId() {
        return Math.floor(Math.random() * this.listOfResources.length);
    }
    async getNameForId(id) {
        const response = await fetch(this.URL + id + "/")
        const json = await response.json().then(res => res.name);
        console.log(json);
        return json;
    }
    getRandomPersonForModeView() {
        const num = this.getRandomId();
        const photo = getNameForId(this.listOfResource[num]);
        this.removeItem(num);
        return {
            photo,
            num
        };
    }
}