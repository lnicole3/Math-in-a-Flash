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
    answer = parseInt(num1.innerText) / parseInt(num2.innerText)
    console.log('division')
  } else if (score > 20) {
    answer = parseInt(num1.innerText) * parseInt(num2.innerText)
    console.log('multiplication')
  } else if (score > 10) {
    answer = parseInt(num1.innerText) - parseInt(num2.innerText)
    console.log('subtraction')
  } else {
    answer = parseInt(num1.innerText) + parseInt(num2.innerText)
    console.log('addition')
  }
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

//     nextLevelbutton.innerText =
//       'Congratulations! You made it to the Level 2!  Keep up the good work!'
//     document.body.appendChild(nextLevelbutton)
//     nextLevelbutton.innerHTML = 'HOORAY'
//     nextLevelbutton.onclick = <a href="subtract.html">SUBTRACT</a>
