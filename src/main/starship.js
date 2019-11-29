import Mode from './mode';
const URL = 'https://swapi.co/api/starships/';
const LIST = [5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27, 28, 29, 31, 39, 40, 41, 43, 47, 48];

export default class Starship extends Mode {
    constructor() {
        super();
        this.listOfResources = LIST;
    }
    getRandomIndex(length) {
        return Math.floor(Math.random() * length);
    }
    async getStarshipForId(id) {
        return await fetch(URL + id).then((response) => response.json()).then(res => res.name);
    }
    getRandomStarshipForModeView() {
        const id=this.listOfResources.splice(this.getRandomIndex(this.listOfResources.length),1);
        const name=this.getStarshipForId(idOfStarship);
        return { name , id};
    }
    getThreeRandomStarships(){
        const clonedListOfResources=this.listOfResources.slice();
           return  Promise.all([
            fetch(URL + clonedListOfResources.splice(this.getRandomIndex(clonedListOfResources.length),1)).then((response) => response.json()).then(res => res.name),
            fetch(URL + clonedListOfResources.splice(this.getRandomIndex(clonedListOfResources.length),1)).then((response) => response.json()).then(res => res.name),
            fetch(URL + clonedListOfResources.splice(this.getRandomIndex(clonedListOfResources.length),1)).then((response) => response.json()).then(res => res.name)
        ])
    }
}