//DOM
const flashcard = document.querySelector('.flash')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let userAnswer
let equation = document.querySelector('card')
let answer
const button = document.getElementById('submit')
let evalScore
let score = 0
//ARRAYS AND OBJECTS

//EVENT LISTENERS

//FUNCTIONS
const generateEquation = () => {
  num1.innerText = Math.floor(Math.random() * 11) + 1
  num2.innerText = Math.floor(Math.random() * 11) + 1
  answer = parseInt(num1.innerText) + parseInt(num2.innerText)
}

const drawScore = () => {}

//->input answer
const evalAnswer = () => {
  if (answer === userAnswer) {
    score = +10
  } else {
    score = -10
  }
  generateEquation()
}

button.addEventListener('click', () => {
  userAnswer = parseInt(document.getElementById('userAnswer').value)
  evalAnswer()
})

generateEquation()
