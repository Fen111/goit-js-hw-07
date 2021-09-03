const categoriesEl = document.querySelectorAll("#categories li.item")
console.log(`В списке ${categoriesEl.length} категории`)

categoriesEl.forEach(elem => {

    const nameCategoryEl = elem.querySelector("h2")
    console.log(`Категория: ${nameCategoryEl.textContent}`)
    
    const listEl = elem.querySelectorAll("ul li")

console.log(`Количество элементов: ${listEl.length}`)
}

)

