// this is for search button
document.getElementById('search-btn').addEventListener('click', () => {
    const inputValue = document.getElementById('input-field').value;
    if(inputValue === ""){
        document.getElementById('input-validation').innerText = `put a food name on the search bar`;  
    }
    else{
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
    if(mealsDataArray === null){ 
        document.getElementById('input-validation').innerText = `nothing found by that name`; 
    }
    else{
        mealsDataArray.forEach(mealInfo => {
            const card = document.createElement('div');
            card.className = 'card shadow m-2';
            const cardInfo = `
            <img src="${mealInfo.strMealThumb}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${mealInfo.strMeal}</h5>
            <a href="#ingredients" class="stretched-link"></a>
            </div>
             `
            card.innerHTML = cardInfo;
            mealItemsArea.appendChild(card);
            document.getElementById('input-validation').innerText = "";
        });
    }

}