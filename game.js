//DOM
const flashcard = document.querySelector('.flash')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let op = document.getElementById('op')
let userAnswer
let equation = document.querySelector('card')
let answer
const button = document.getElementById('submit')
let score = 0
const scoreboard = document.querySelector('.score')
scoreboard.innerHTML = score
let userInput = document.getElementById('userAnswer')

//FUNCTIONS
const generateRandomNumber = () => {
  let num = Math.floor(Math.random() * 11) + 1
  return num
}

const generateEquation = () => {
  firstNumber = generateRandomNumber()
  secondNumber = generateRandomNumber()
  while (secondNumber > firstNumber) {
    secondNumber = generateRandomNumber()
  }
  num1.innerText = firstNumber
  num2.innerText = secondNumber

  if (score > 30) {
    alert('You are a math whiz! Come play again tomorrow!')
    window.location.href = 'index.html'
  }
  if (score > 20) {
    answer = parseInt(num1.innerText) * parseInt(num2.innerText)
    op.innerText = 'x'
  } else if (score > 10) {
    answer = parseInt(num1.innerText) - parseInt(num2.innerText)
    op.innerText = '-'
  } else {
    answer = parseInt(num1.innerText) + parseInt(num2.innerText)
    op.innerText = '+'
  }
}

const evalAnswer = () => {
  if (answer === userAnswer) {
    score += 2
    generateEquation()
    scoreboard.innerHTML = score
    userInput.value = ''
  } else {
    score -= 2
    scoreboard.innerHTML = score
    userInput.value = ''
  }
}
button.addEventListener('click', () => {
  userAnswer = parseInt(userInput.value)
  evalAnswer()
})

generateEquation()
