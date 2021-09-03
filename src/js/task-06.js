
const input = document.querySelector('#validation-input')
console.log(input)


input.addEventListener('blur', checkLengthOfInput)

function checkLengthOfInput() {

    const correctNumberOfCharacters = input.dataset.length


    if (input.value.length != correctNumberOfCharacters) {
    
        input.classList.add('invalid')
    }
    
    else {
         input.classList.remove('invalid')
         input.classList.add('valid')
    }

}