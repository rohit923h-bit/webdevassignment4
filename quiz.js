let quizQuestions = [
  { question: "What does HTML stand for?", answer: "hypertext markup language" },
  { question: "What does CSS stand for?", answer: "cascading style sheets" },
  { question: "What does JS stand for?", answer: "javascript" },
  { question: "Which tag is used for a link in HTML?", answer: "a" },
  { question: "Which property changes text color in CSS?", answer: "color" }
];

function runQuiz() {
  let score = 0;
  
  for(let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);
    userAnswer = userAnswer.toLowerCase().trim();
    
    if(userAnswer === quizQuestions[i].answer) {
      score = score + 1;
      alert("Correct!");
    } else {
      alert("Wrong. Correct answer is: " + quizQuestions[i].answer);
    }
  }
  
  alert("Your final score is " + score + " out of " + quizQuestions.length);
}

runQuiz();
