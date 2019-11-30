var peopleRanking = JSON.parse(localStorage.getItem('peopleRanking')) || [];
var vehicleRanking = JSON.parse(localStorage.getItem('vehicleRaking')) || [];
var spaceshipRanking = JSON.parse(localStorage.getItem('spaceshipRanking')) || [];

var sortedpeopleRanking = [];
var sortedvehicleRanking = [];
var sortedSpacehipRanking = [];


const gameMode = {
    
    PEOPLE:"PEOPLE", 
    VEHICLES:"VEHICLES", 
    SPACESHIPS:"SPACESHIPS" 
}

let currentMode = gameMode.PEOPLE;

class RankingEntry {
    
    

    constructor(nickName, correctAnswers, numberofQuestions) {
       
        this.nickName = nickName;
        this.correctAnswers = correctAnswers;
        this.numberofQuestions = numberofQuestions;

    }

    pushPlayertoArray() {
     

        switch(currentMode){
            case gameMode.PEOPLE:
                
                    peopleRanking.push(player);
                    sortedpeopleRanking.push(player);
                    localStorage.setItem('peopleRanking', JSON.stringify(peopleRanking));
                    sortedpeopleRanking.sort(function (a, b) {
                        return b.correctAnswers - a.correctAnswers
                    })
              
                break; 
        }
        
        switch(currentMode){
            case gameMode.VEHICLES:

                    vehicleRanking.push(player);
                    sortedvehicleRanking.push(player);
                    localStorage.setItem('vehicleRanking', JSON.stringify(vehicleRanking));
                    sortedvehicleRanking.sort(function (a, b) {
                        return b.correctAnswers - a.correctAnswers
                    })
               
                break; 
        }


        switch(currentMode){
            case gameMode.SPACESHIPS:
    
            spaceshipRanking.push(player);
            sortedSpacehipRanking.push(player);

            localStorage.setItem('spaceshipRanking', JSON.stringify(spaceshipRanking));

            sortedSpacehipRanking.sort(function (a, b) {
                return b.correctAnswers - a.correctAnswers;
            })

                break; 
        }


            
        
      
        

    }

}

// var player = new RankingEntry("jan", 39, 40, RankingEntry.prototype.pushPlayertoArray());
// var player = new RankingEntry("marek", 29, 40, RankingEntry.prototype.pushPlayertoArray());
// var player = new RankingEntry("olek", 19, 40, RankingEntry.prototype.pushPlayertoArray());