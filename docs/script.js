const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestion, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame () {
    startButton.classList.add('hide')
    shuffledQuestion = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestion[currentQuestionIndex])
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.right) {
            button.dataset.right = answer.right
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function selectAnswer(e) {
    const selectedButton = e.target
    const right = selectedButton.dataset.right
    setStatusClass(document.body, right)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.right)
    })
    if (shuffledQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, right) {
    clearStatusClass(element)
    if (right) {
        element.classList.add('right')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('right')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is a div?',
        answers: [
            {text: 'an HTML container', right: true},
            {text: 'an element', right: false},
            {text: 'a JS fucntion', right: false},
            {text: 'a CSS style class', right: false},
        ]
    }
]