
const input = document.getElementById("font-size-control")

const text = document.getElementById('text')


input.addEventListener('input', onInputValue)

function onInputValue (event) {

    text.style.fontSize = event.target.value + "px"
}

