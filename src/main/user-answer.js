function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Question {
    constructor(q, a) {
        this.question = q;
        this.answer = a;
    }

    getQuestion() {
        return this.question;
    }

    getAnswer() {
        return this.answer;
    }

    getAnswers() {
        const answers = [];
        answers.push(this.answer);

        do {
            let question = questions[getRandomInt(0, questions.length - 1)];
            
            if(question.getQuestion() != this.question) {
                answers.push(question.getAnswer());
            }
        } while(answers.length < 4);

        return answers;
    }

    isAnswerCorrect(answers) {
        return this.answer == this.answer;
    }
}

const questions = [
    new Question("question 1", "answer 1"),
    new Question("question 2", "answer 2"),
    new Question("question 3", "answer 3"),
    new Question("question 4", "answer 4"),
    new Question("question 5", "answer 5")
]

class UserAnswer {
    
    constructor(question, userAnswer) {
        this.question = question;
        this.userAnswer = userAnswer;
    }
}

const answers = [];

console.log(questions[0].getAnswers());

const button = '';

button.addEventListener('click', e => {
    answers.push(new UserAnswer(question, userAnswer));
})