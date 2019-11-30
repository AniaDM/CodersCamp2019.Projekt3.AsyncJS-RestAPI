export default class Mode {
    constructor(playtime) {
        
        if (this.constructor === Mode) {
            throw new TypeError('Abstract class "Piece" cannot be instantiated directly.')
        }
        this.playtime=playtime;
    }
   
     getPlayTime(){
         return this.playtime;
     }
}
