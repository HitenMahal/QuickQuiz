const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "Who is Diana",
    choice1: "Sister of Serena Williams 🎾",
    choice2: "14rd President of U.S (🇺🇸)",
    choice3: "Princess👑",
    choice4: "Unanswerable because last name was not specified 🤷",
    answer: 3
  },
  {
    question:
      "What is scary",
    choice1: "Space👽",
    choice2: "Ocean🌊",
    choice3: "Neurolink🧠",
    choice4: "All of the above☝️",
    answer: 4
  },
  {
    question: "Choose one",
    choice1: "Gordan Ramsy👨‍🍳",
    choice2: "Bob Ross🎨",
    choice3: "Barrack Obama🥇",
    choice4: "Johnny Depp🥰",
    answer: 2
  },
  {
    question: "Choose one",
    choice1: "Batman🦇",
    choice2: "Iron Man💖",
    choice3: "Spider-man🕸️",
    choice4: "Black Widow🕷️",
    answer: 3
  },
  {
    question: "Choose the right place to live",
    choice1: "Penthouse in NYC🗽",
    choice2: "A nice cabin in the mountains⛰️",
    choice3: "Nice Beachside house in Hawaii🏝️",
    choice4: "Calgary🗼",
    answer: 3
  },
  {
    question: "Choose a song",
    choice1: "Potato Salad 🥔 -Tyler, the destroyer + A$AP",
    choice2: "Yhandi 👓- Kanye East",
    choice3: "3005 🎓- Serious Gambino",
    choice4: "Get The Hints 🍉- Jon Bon Jovi",
    answer: 1
  }
];

//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 6;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  // const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  const questionIndex = 0;
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 750);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
