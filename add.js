//DOM
const flashcard = document.querySelector('.flash')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let userAnswer = document.getElementById('userAnswer')
let equation = document.querySelector('card')
let answer
const button = document.getElementById('submit')

//ARRAYS AND OBJECTS

//EVENT LISTENERS
button.addEventListener('click', () => {
  console.log('submitted')
})

//FUNCTIONS
const generateEquation = () => {
  num1.innerText = Math.floor(Math.random() * 11) + 1
  num2.innerText = Math.floor(Math.random() * 11) + 1
  answer = num1 + num2
  console.log(num1, num2, answer)
  return answer
}
generateEquation()

const evalEquation = () => {
  if (answer === userAnswer) {
    console.log('true')
  } else {
    console.log('false')
  }
}
evalEquation()

console.log(answer)
console.log(userAnswer)
