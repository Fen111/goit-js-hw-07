const input = controls.querySelector('#controls input');
const createBtn = document.querySelector('button[data-action="render"]');
const clearBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = input.value;

  for (let i = amount; i > 0; i -= 1) {
    let box = i;
    let initialWidth = 30 + i * 10;
    let initialHeight = 30 + i * 10;

    box = document.createElement('div');

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    box.style.backgroundColor = color;

    box.style.width = initialWidth + 'px';
    box.style.height = initialHeight + 'px';

    boxes.prepend(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
