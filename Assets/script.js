// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

const submitButton = document.getElementById('Start Quiz');


// TO DO : Create questions array
// Use set interval to create countdown timer
const quizQuesitons = [
    {
        question:"What does HTML stand for?",
        answers : {
            a: "",
            b: "",
            c: "",
        },
        correctAnswer: "c" 
    },
    {
        question:"How do you check your current development branch for Git?",
        answers: {
            a: "git branch",
            b: "git checkout",
            c: "git status",
        },
        correctAnswer: "a"
    },
    {
        question:"Which of these are position values",
        answers: {
            a: "left and right",
            b: "fixed and flexible",
            c: "relative and absolute",
        },
        correctAnswer: "c",
    },
    {
        question: "make it stop",
        answers: {
            a: "no",
            b: "nox2",
            c: "nox3",
        },
        correctAnswer: "c",
    },
];

function quizTimer() {
    var sec = 60;
    function startTimer () {
    var timer = setInterval (function () {
        sec --;
        document.getElementById ('displayTime').innerHTML=':00' + sec;
        if (sec < 0) {
            clearInterval(timer);
            alert("You're out of time!");
        } 
    }, 1000);
}


function createQuiz(); {
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {}
    )
    

}
