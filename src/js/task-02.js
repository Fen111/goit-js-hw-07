const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const categoryEl = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');

  itemEl.textContent = ingredient;

  return itemEl;
});

categoryEl.append(...ingredientsList);
