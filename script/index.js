function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
  const categoryContainer = document.getElementById("category-container");
  for (let i = 0; i < categories.length; i++) {
    // get single category
    const category = categories[i];
    console.log(category);
    const containerDiv = document.createElement("div");
    containerDiv.innerHTML = `
    <button class="btn hover:bg-[#FF1F3D] hover:text-white hover:font-bold">${category.category}</button>
    `;
    // add button on the categoryContainer
    categoryContainer.appendChild(containerDiv);
  }
}

loadCategories();
