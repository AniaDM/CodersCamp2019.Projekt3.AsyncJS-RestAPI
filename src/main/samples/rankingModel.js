
var peopleRanking = JSON.parse(localStorage.getItem('peopleRanking')) || [];
var vehicleRanking = JSON.parse(localStorage.getItem('peopleRanking')) || [];
var spaceshipRanking = JSON.parse(localStorage.getItem('peopleRanking')) || [];

var sortedpeopleRanking =[];
var sortedvehicleRanking =[];
var sortedSpaceShipRanking =[];


const gameMode ='1';

class Ranking{
    constructor(nickName, correctAnswers, numberofQuestions){
            
            this.nickName = nickName;
            this.correctAnswers = correctAnswers;
            this.numberofQuestions = numberofQuestions;
           
    }
  
        pushPlayertoArray(){
       
              if(gameMode==1){
             
              peopleRanking.push(player);
              sortedpeopleRanking.push(player);
              localStorage.setItem('PeopleRanking', JSON.stringify(peopleRanking));

              sortedpeopleRanking.sort(function(a,b){
              return b.correctAnswers - a.correctAnswers
              })
             
              }
               
                else if(gameMode==2){

                vehicleRanking.push(player);
                sortedvehicleRanking.push(player);
                localStorage.setItem('vehicleRanking', JSON.stringify(vehicleRanking));

                sortedvehicleRanking.sort(function(a,b){
                return b.correctAnswers - a.correctAnswers
                })}
              
                else{
                  spaceshipRanking.push(player);
                  sortedSpaceShipRanking.push(player);

                  localStorage.setItem('spaceshipRanking', JSON.stringify(spaceshipRanking));

                  sortedSpaceShipRanking.sort(function(a,b){
                    return b.correctAnswers - a.correctAnswers;
                  })
                }
          
        }
  
}

// var player = new Ranking("jan",39,40,Ranking.prototype.pushPlayertoArray());
// var player = new Ranking("marek",29,40,Ranking.prototype.pushPlayertoArray());
// var player = new Ranking("olek",19,40,Ranking.prototype.pushPlayertoArray());

