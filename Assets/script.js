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

function questionOne(){
    nextQuestion(document.getElementById("question1"), document.getElementById("question2"));
}

function nextQuestion(question1,question2) {
    question1.classList.toggle("hidden");
    question1.classList.toggle("show");
    question2.classList.toggle("hidden");
    question2.classList.toggle("show");
}
