const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const categoryEl = document.querySelector("#ingredients")

ingredients.forEach(ingredient => {
  
const itemEl = document.createElement("li")
  
  itemEl.textContent = ingredient
  categoryEl.appendChild(itemEl)
  
})





