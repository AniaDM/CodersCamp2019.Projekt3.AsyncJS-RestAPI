

export default class Game {

    listOfAnswers=[];
    
    getListOfAnswers(){
        return this.listOfAnswers;
    }
    saveAnswer(userAnswer,userAnswerIsCorrect,gvAnswer,gvAnswerIsCorrect, correctAnswer,url){
        this.listOfAnswers.push(
            {
                userAnswer: userAnswer,
                userAnswerIsCorrect: userAnswerIsCorrect,
                gvAnswer:gvAnswer,
                gvAnswerIsCorrect: gvAnswerIsCorrect,
                correctAnswer: correctAnswer,
                url: url
            }
       )
    }

}
