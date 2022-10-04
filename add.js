//DOM
const flashcard = document.querySelector('.flash')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let userAnswer
let equation = document.querySelector('card')
let answer
const button = document.getElementById('submit')

//ARRAYS AND OBJECTS

//EVENT LISTENERS

//FUNCTIONS
const generateEquation = () => {
  num1.innerText = Math.floor(Math.random() * 11) + 1
  num2.innerText = Math.floor(Math.random() * 11) + 1
  answer = parseInt(num1.innerText) + parseInt(num2.innerText)
}

const evalEquation = () => {
  if (answer === userAnswer) {
  } else {
  }
}

button.addEventListener('click', () => {
  userAnswer = parseInt(document.getElementById('userAnswer').value)
  evalEquation()
})

generateEquation()
