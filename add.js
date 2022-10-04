//DOM
const flashcard = document.querySelector('.flash')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let userAnswer
let equation = document.querySelector('card')
let answer
const button = document.getElementById('submit')
let score = 0
const scoreboard = document.querySelector('.score')
let userInput = document.getElementById('userAnswer')
//ARRAYS AND OBJECTS

//EVENT LISTENERS

//FUNCTIONS
const generateEquation = () => {
  num1.innerText = Math.floor(Math.random() * 11) + 1
  num2.innerText = Math.floor(Math.random() * 11) + 1
  answer = parseInt(num1.innerText) + parseInt(num2.innerText)
}

//->input answer
const evalAnswer = () => {
  if (answer === userAnswer) {
    score += 1
    scoreboard.innerHTML = 'score: ' + score
    userInput.value = ''
  } else {
    score -= 1
    scoreboard.innerHTML = 'score: ' + score
    userInput.value = ''
  }

  generateEquation()
}

button.addEventListener('click', () => {
  userAnswer = parseInt(userInput.value)
  evalAnswer()
})

generateEquation()
