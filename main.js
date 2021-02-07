// this is for search button
document.getElementById('search-btn').addEventListener('click', () => {
    const inputValue = document.getElementById('input-field').value;
    if (inputValue === "") {
        document.getElementById('input-validation').innerText = `put a food name on the search bar`;
    }
    else {
        url(inputValue);
    }

})


// to load api from server
const url = inputValue => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(response => response.json())
        .then(data => searchMealsData(data))
}


// to display all data in index.html page
const searchMealsData = mealsData => {
    const mealItemsArea = document.getElementById('meal-items-area');
    mealItemsArea.innerHTML = "";
    const mealsDataArray = mealsData.meals;
    //input validation
    if (mealsDataArray === null) {
        document.getElementById('input-validation').innerText = `nothing found by that name`;
        document.getElementById('ingredients-area').innerHTML = "";
    }
    else {
        mealsDataArray.forEach(mealInfo => {
            const card = document.createElement('div');
            card.className = 'card shadow m-2';
            const cardInfo = `
            <img src="${mealInfo.strMealThumb}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${mealInfo.strMeal}</h5>
            <a onclick="showIngredients('${mealInfo.strMeal}')" href="#ingredients-area" class="stretched-link"></a>
            </div>
             `
            card.innerHTML = cardInfo;
            mealItemsArea.appendChild(card);
            document.getElementById('input-validation').innerText = "";
            document.getElementById('ingredients-area').innerHTML = "";
        });
    }

}


//to show all ingredients in the top section
const showIngredients = mealInfo => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInfo}`
    fetch(url)
        .then(response => response.json())
        .then(data => renderIngredients(data.meals[0]))
}


//to grab all ingredients
const renderIngredients = ingredient => {
    const ingredientsSection = document.getElementById('ingredients-area');
    //this messy code is for ingredients validation
    if (ingredient.strIngredient5 === "null" || ingredient.strIngredient5 === "",
    ingredient.strIngredient6 === "null" || ingredient.strIngredient6 === "",
    ingredient.strIngredient7 === "null" || ingredient.strIngredient7 === "",
    ingredient.strIngredient8 === "null" || ingredient.strIngredient8 === "",
    ingredient.strIngredient9 === "null" || ingredient.strIngredient9 === "",
    ingredient.strIngredient10 === "null" || ingredient.strIngredient10 === ""){
    ingredient.strIngredient5 = 'missing';ingredient.strIngredient6 = 'missing';
    ingredient.strIngredient7 = 'missing';ingredient.strIngredient8 = 'missing';
    ingredient.strIngredient9 = 'missing';ingredient.strIngredient10 = 'missing';
    }
    ingredientsSection.innerHTML = `
    <img src="${ingredient.strMealThumb}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${ingredient.strMeal}</h5>
    <h6 class="text-info">Ingredients</h6>
    <ul type ="square">
       <li>${ingredient.strIngredient1}</li>
       <li>${ingredient.strIngredient2}</li>
       <li>${ingredient.strIngredient3}</li>
       <li>${ingredient.strIngredient4}</li>
       <li>${ingredient.strIngredient5}</li>
       <li>${ingredient.strIngredient6}</li>
       <li>${ingredient.strIngredient7}</li>
       <li>${ingredient.strIngredient8}</li>
       <li>${ingredient.strIngredient9}</li>
       <li>${ingredient.strIngredient10}</li>
    </ul>
    </div>
    `
}