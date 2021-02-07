
document.getElementById('search-btn').addEventListener('click', () => {
    const inputValue = document.getElementById('input-field').value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(response => response.json())
        .then(data => searchMeal(data))
    
})

const searchMeal = allMeals => {
    const allMealItems = document.getElementById('all-meal-items');
    for (let i = 0; i < allMeals.meals.length; i++) {
        const allData = allMeals.meals[i];
        const cards = document.createElement('div');
        cards.className = 'card shadow m-3';
        const cardInfo = `
   <img src="${allData.strMealThumb}" class="card-img-top">
   <div class="card-body">
   <h5 class="card-title">${allData.strMeal}</h5>
   <a href="#ingredients" class="stretched-link"></a>
   </div>
    `
        cards.innerHTML = cardInfo;
        allMealItems.appendChild(cards);
    }
}









