const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
let shuffledQuestion, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestion[currentQuestionIndex]);
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.right) {
      button.dataset.right = answer.right;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const right = selectedButton.dataset.right;
  setStatusClass(document.body, right);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.right);
  });
  if (shuffledQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, right) {
  clearStatusClass(element);
  if (right) {
    element.classList.add("right");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("right");
  element.classList.remove("wrong");
}

const countdown = [];
const questions = [
  {
    question: "What is a div?",
    answers: [
      { text: "an HTML container", right: true },
      { text: "an element", right: false },
      { text: "a JS fucntion", right: false },
      { text: "a CSS style class", right: false },
    ],
  },
  {
    question: "What is HTML?",
    answers: [
      { text: "the styling of a webpage", right: false },
      { text: "the structure of a webpage", right: true },
      { text: "the function of a webpage", right: false },
      { text: "an email host", right: false },
    ],
  },
  {
    question: "What is CSS?",
    answers: [
      { text: "an HTML container", right: false },
      { text: "an element", right: false },
      { text: "a JS fucntion", right: false },
      { text: "the styling of a webpage", right: true },
    ],
  },
  {
    question: "What is JavaScript?",
    answers: [
      { text: "a website host", right: false },
      { text: "an element id", right: false },
      { text: "a websites function", right: true },
      { text: "a CSS style class", right: false },
    ],
  },
  {
    question: "Which is a container?",
    answers: [
      { text: "div", right: true },
      { text: "class", right: false },
      { text: "function", right: false },
      { text: "const", right: false },
    ],
  },
  {
    question: "What is an API?",
    answers: [
      { text: "an HTML container", right: false },
      { text: "an application programming interface", right: true },
      { text: "a JS fucntion", right: false },
      { text: "a CSS style element", right: false },
    ],
  },
  {
    question: "What is a web developer?",
    answers: [
      { text: "someone that writes code", right: true },
      { text: "someone that builds computers", right: false },
      { text: "someone that delivers parts", right: false },
      { text: "someone that answers phones", right: false },
    ],
  },
  {
    question: "What is a container?",
    answers: [
      { text: "an HTML element", right: true },
      { text: "a CSS element", right: false },
      { text: "a JS fucntion", right: false },
      { text: "a class id", right: false },
    ],
  },
  {
    question: "What does JavaScript do?",
    answers: [
      { text: "changes the color of an image", right: false },
      { text: "links to a website", right: false },
      { text: "builds the functions of a webpage", right: true },
      { text: "tracks semantic stability", right: false },
    ],
  },
  {
    question: "What is HSL?",
    answers: [
      { text: "an HTML container", right: false },
      { text: "a color style", right: true },
      { text: "a JS element", right: false },
      { text: "a C++ div", right: false },
    ],
  },
  {
    question: "What is a div?",
    answers: [
      { text: "an HTML container", right: true },
      { text: "an element", right: false },
      { text: "a JS fucntion", right: false },
      { text: "a CSS style class", right: false },
    ],
  },
  {
    question: "What is a div?",
    answers: [
      { text: "an HTML container", right: true },
      { text: "an element", right: false },
      { text: "a JS fucntion", right: false },
      { text: "a CSS style class", right: false },
    ],
  },
  {
    question: "What is a div?",
    answers: [
      { text: "an HTML container", right: true },
      { text: "an element", right: false },
      { text: "a JS fucntion", right: false },
      { text: "a CSS style class", right: false },
    ],
  },
  {
    question: "What is a div?",
    answers: [
      { text: "an HTML container", right: true },
      { text: "an element", right: false },
      { text: "a JS fucntion", right: false },
      { text: "a CSS style class", right: false },
    ],
  },
  {
    question: "What is a div?",
    answers: [
      { text: "an HTML container", right: true },
      { text: "an element", right: false },
      { text: "a JS fucntion", right: false },
      { text: "a CSS style class", right: false },
    ],
  },
  {
    question: "What is a div?",
    answers: [
      { text: "an HTML container", right: true },
      { text: "an element", right: false },
      { text: "a JS fucntion", right: false },
      { text: "a CSS style class", right: false },
    ],
  },
  {
    question: "What is a div?",
    answers: [
      { text: "an HTML container", right: true },
      { text: "an element", right: false },
      { text: "a JS fucntion", right: false },
      { text: "a CSS style class", right: false },
    ],
  },
  {
    question: "What is a div?",
    answers: [
      { text: "an HTML container", right: true },
      { text: "an element", right: false },
      { text: "a JS fucntion", right: false },
      { text: "a CSS style class", right: false },
    ],
  },
  {
    question: "What is a div?",
    answers: [
      { text: "an HTML container", right: true },
      { text: "an element", right: false },
      { text: "a JS fucntion", right: false },
      { text: "a CSS style class", right: false },
    ],
  },
  {
    question: "What is a div?",
    answers: [
      { text: "an HTML container", right: true },
      { text: "an element", right: false },
      { text: "a JS fucntion", right: false },
      { text: "a CSS style class", right: false },
    ],
  },
];
