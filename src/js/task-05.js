
const input = document.querySelector('#name-input')
console.dir(input)
const currentName = document.querySelector('#name-output')
console.log(currentName)

input.addEventListener('input', onInputChange)

function onInputChange(event) {
    currentName.textContent = event.currentTarget.value
}



