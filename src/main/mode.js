export default class Mode {
    constructor(playtime) {
        
        if (this.constructor === Mode) {
            throw new TypeError('Abstract class "Piece" cannot be instantiated directly.')
        }
        this.playtime=playtime;
    }
    getGameMode(){
        return this.TITLE_MODE;
     }
     getPlayTime(){
         return this.playtime;
     }
}
