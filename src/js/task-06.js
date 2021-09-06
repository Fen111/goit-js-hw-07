const input = document.querySelector('#validation-input');
const correctNumberOfCharacters = Number(input.dataset.length);

input.addEventListener('blur', checkLengthOfInput);
input.addEventListener('focus', removeClass);

function checkLengthOfInput(event) {
  if (event.currentTarget.value.length === correctNumberOfCharacters) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}

function removeClass(event) {
  event.currentTarget.classList.remove('valid', 'invalid');
}
