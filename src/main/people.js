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

    getListOfResources() {
        const tab = []
        for (let i = 0; i < 89; i++) {
            tab[i] = i + 1;
        }
        return tab.filter(item => {
            return item != 17
        })
    }
    getModeRules(nameOfCharacter) {
        let str = this.playtime > 1 ? 's' : '';
        return `You have ${MINUTES[this.playtime]} minute${str} (${this.playtime}m) to answer as many questions as possible.During the game on each question you need to select who from Star Wars is showed on the left(${nameOfCharacter}) from available options, or select that the character is none above.`;
    }
   
}
 
