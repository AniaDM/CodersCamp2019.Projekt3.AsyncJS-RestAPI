export default class Mode {
    constructor(playtime) {
        
        if (this.constructor === Mode) {
            throw new TypeError('Abstract class "Mode" cannot be instantiated directly.')
        }
        this.playtime=playtime;
    }
    
}
