//DOM
const flashcard = document.querySelector('.flash')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let op = document.getElementById('op')
let userAnswer
let equation = document.querySelector('card')
let answer
const button = document.getElementById('submit')
let score = 9
const scoreboard = document.querySelector('.score')
let userInput = document.getElementById('userAnswer')
let equationType = 'addition'

//FUNCTIONS

const generateEquation = () => {
  num1.innerText = Math.floor(Math.random() * 11) + 1
  num2.innerText = Math.floor(Math.random() * 11) + 1

  if (equationType === 'addition') {
    answer = parseInt(num1.innerText) + parseInt(num2.innerText)
  } else if (equationType === 'subtraction') {
    answer = parseInt(num1.innerText) - parseInt(num2.innerText)
  } else if (equationType === 'multiplication') {
    answer = parseInt(num1.innerText) * parseInt(num2.innerText)
  } else if (equationType === 'division') {
    answer = parseInt(num1.innerText) / parseInt(num2.innerText)
  }
  console.log(equationType)
}

//->input answer
const evalAnswer = () => {
  if (answer === userAnswer) {
    score += 1
    generateEquation()
    scoreboard.innerHTML = score
    userInput.value = ''
  } else {
    score -= 1
    scoreboard.innerHTML = score
    userInput.value = ''
  }
}
button.addEventListener('click', () => {
  userAnswer = parseInt(userInput.value)
  evalAnswer()
})

generateEquation()
evalAnswer()

const nextLevel = () => {
  if (score > 30) {
    equationType = 'division'
  } else if (score > 20) {
    equationType = 'multiplication'
  } else if (score > 10) {
    equationType = 'subtraction'
  }
}

nextLevel()
generateEquation()

//     nextLevelbutton.innerText =
//       'Congratulations! You made it to the Level 2!  Keep up the good work!'
//     document.body.appendChild(nextLevelbutton)
//     nextLevelbutton.innerHTML = 'HOORAY'
//     nextLevelbutton.onclick = <a href="subtract.html">SUBTRACT</a>
