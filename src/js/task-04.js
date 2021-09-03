
const counterValue = document.querySelector("#value")
console.log(counterValue.textContent)

let currentValue = 0

const decrement = () => counterValue.textContent = currentValue -=1
const increment = () => counterValue.textContent = currentValue +=1


const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')

decrementBtn.addEventListener('click', decrement)
incrementBtn.addEventListener('click', increment)
