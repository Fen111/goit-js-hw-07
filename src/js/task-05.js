const input = document.getElementById('name-input');
console.dir(input);
const currentName = document.getElementById('name-output');
console.dir(currentName);

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  let userName = event.currentTarget.value;
  if (userName === '') {
    currentName.textContent = 'незнакомец';
  } else {
    currentName.textContent = userName;
  }
}
