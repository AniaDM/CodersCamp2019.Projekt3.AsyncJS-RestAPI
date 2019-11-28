import Mode from './mode';

const TITLE_MODE = 'MODE: Who is this character?';
const URL = 'https://swapi.co/api/people/';
const ASSETS = '../../assets/img/modes/people/'
const MINUTES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];


export default class People extends Mode {
    constructor(playtime) {
        super(playtime);
        this.listOfResources = this.getListOfResources();
    }
    getRandomId() {
        return Math.floor(Math.random() * this.listOfResources.length);
    }
    getPhotoForGameMode(id) {
        return ASSETS + `${id}.jpg`;
    }
    getListOfResources() {
        const tab = []
        for (let i = 0; i < 89; i++) {
            tab[i] = i + 1;
        }
        return tab.filter(item => {
            return item != 17
        })
    }
    getModeRules(name) {
        let str = this.playtime > 1 ? 's' : '';
        return `You have ${MINUTES[this.playtime]} minute${str} (${this.playtime}m) to answer as many questions as possible.During the game on each question you need to select who from Star Wars is showed on the left(${name}) from available options, or select that the character is none above.`;
    }
    getRandomPersonForModeView() {
        const num = this.getRandomId();
        const photo = getPhotoForGameMode(this.listOfResource[num]);
        this.removeItem(num);
        return {
            photo,
            num
        };
    }
    removeItem(id) {
        return this.listOfResources.splice(id, 1);
    }
}
