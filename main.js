
document.getElementById('search-btn').addEventListener('click', () => {
    const inputValue = document.getElementById('input-field').value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(response => response.json())
        .then(data => searchMeal(data))
    const searchMeal = allMeals => {

        for (let i = 0; i < allMeals.meals.length; i++) {
            const allData = allMeals.meals[i];
            CreateCards(allData);
        }
    }

})

const CreateCards = (mealsData) => {
    const allMealItems = document.getElementById('all-meal-items');
    const cards = document.createElement('div');
    cards.className = 'card shadow m-2';

    const cardInfo = `
           <img src="${mealsData.strMealThumb}" class="card-img-top">
           <div class="card-body">
           <h5 class="card-title">${mealsData.strMeal}</h5>
           <a href="#ingredients" class="stretched-link"></a>
           </div>
            `
    cards.innerHTML = cardInfo;
    allMealItems.appendChild(cards);
}










