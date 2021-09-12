var readlineSync = require("readline-sync");

var score = 0;
console.log("Hey");

//welcome message, at the start of the game
function welcome(){
  var username = readlineSync.question("What's your name ");
  console.log("Hi",username, "This is a quiz about me.");
}


//asks questions and checks for correct answer
function play(question, answer){
  var answerByUser = readlineSync.question(question);

  if(answerByUser.toUpperCase() === answer.toUpperCase()){
    console.log("Yay! Correct answer");
    score = score + 1;
  }
  else{
    score = score - 1;
    console.log("Oh no, wrong answer");
  }  
  showScore();
}

//to show the score on the screen
function showScore(){
  console.log("Your score is ", score);
  console.log("--------------------------");
}

//set of questions and answers  
var questionSet = [
  {
    question: "What's my other name?",
    answer: "Kasturi"
  }, 
  {
    question: "What's my preferred username on social media platforms?",
    answer: "samflab"
  },
  {
    question: "Where do I live?",
    answer: "Delhi"
  },
  {
    question: "What do I like to watch?",
    answer: "Anime"
  },
  {
    question: "What am I? Student or a working professional?",
    answer: "student"
  },
  {
    question: "What's my fav color?",
    answer: "Blue"
  },
  {
    question: "Where's my hometown?",
    answer: "Odisha"
  },
  {
    question: "What's my preferred mode? Dark or light?",
    answer: "Dark"
  },
];

welcome();
for(i = 0; i < questionSet.length; i++){
  var currentQuestion = questionSet[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("WELL PLAYED!");
console.log("------------------------------");
