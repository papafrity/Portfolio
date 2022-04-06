const showSearchInput = ()=>{
    const searchInput = document.createElement('form');
    searchInput.id='search';
    searchInput.innerHTML =`
    <button  class="search--header"> Search   <i class="fas fa-search"></i></button>    
        <input placeholder="Search" id="searchInput" type="text" >
        `
    const span = document.createElement('span')
    span.innerHTML ="<span id='error'></span>";        
    containerSearch.append(searchInput,span);
    
}


const createFavoriteRecipes = (favoriteRecipes)=>{
    const favoriteRecipesContainer = document.createElement('div');
    const div= document.createElement('div');
    favoriteRecipesContainer.id = 'favoriteRecipes'
    favoriteRecipes.forEach(favoriteRecipe =>{
        const {id,title,image} = favoriteRecipe;
        const favoriteRecipeContainer = document.createElement('div');
        favoriteRecipeContainer.classList.add('favoriteRecipe')
        favoriteRecipeContainer.innerHTML =`
        <button class='removeFavoriteRecipe' id="${id}">x</button>
        <div class="favoriteRecipe--img-b">
        </div>
        <div class="favoriteRecipe--img">
            <img src="${image}" alt="${title}">
        </div>
        <p> ${title}</p>
        `;
        favoriteRecipesContainer.append(favoriteRecipeContainer)

    });
    return favoriteRecipesContainer;

}
const createSearchRecipes = (RecipesSearch,favoriteIds)=>{
    const recipes = document.createElement('div');
    recipes.id= 'recipes';
    RecipesSearch.results.forEach(element => {
        const { id, title, image} = element;
        if(favoriteIds.includes(id)){
            const recipe = document.createElement('div');
            recipe.classList.add('recipe');
            recipe.id = `${id}`
            recipe.innerHTML =` 
            <div  class="recipe--img">
            <img src="${image}" alt="${title}">
            </div>
            <div class="recipe--container">
            <p>${title}</p>
            <button  class='btnFavorite favorite'  ><i   class="fas fa-heart"></i></button>
            <input type='button' value='See Details..'  class='details'  ></input>
            </div>`;
            recipes.appendChild(recipe);
            
        }else{

            const recipe = document.createElement('div');
            recipe.classList.add('recipe');
            recipe.id = `${id}`
            recipe.innerHTML =` 
            <div  class="recipe--img">
            <img src="${image}" alt="${title}">
            </div>
            <div class="recipe--container">
            <p>${title}</p>
            <button  class='btnFavorite'  ><i   class="fas fa-heart"></i></button>
            
            <input type='button' value='See Details'  class='details'  >
            
            </div>`;
            recipes.appendChild(recipe);
        }
        

    
    });
    return recipes;
}
const createNutritionDetail = (nutrition )=>{
    const { calories,carbs,fat,protein} = nutrition
const nutritionContainer = document.createElement('div');
nutritionContainer.classList.add('nutrition')
nutritionContainer.innerHTML=`
<h2 class='title' >Nutrition</h2>
<ul >
    <li> Calories: ${calories}</li>
    <li>Carbs: ${carbs}</li>
    <li>Fat: ${fat}</li>
    <li>Proteins: ${protein}</li>
</ul>`;
console.log(nutritionContainer);

    return nutritionContainer;
}
const createIngridientsDetail = (ingredientsObject )=>{
    const ingredientsContainer = document.createElement('div');
    ingredientsContainer.classList.add('ingridients');
    ingredientsContainer.innerHTML ='<h2 class="title">Ingredients</h2>';
    const ul = document.createElement('ul');

    ingredientsObject.ingredients.forEach(ingredient => {
        const {name} = ingredient ;
        const {unit,value} = ingredient.amount.metric ;
        ul.innerHTML +=`<li> ${name} Amount: ${value}${unit==''? '':'-'}${unit}</li>`
    });
    ingredientsContainer.append(ul);
    console.log(ingredientsContainer);
    
    return ingredientsContainer;
}
const createInstructionsDetail = (instructi)=>{
    if(instructi.length == 0){
        const instructionsContainer = document.createElement('div');
    instructionsContainer.classList.add('instructions');
    instructionsContainer.innerHTML =`<h2 class='title'>Instructions </h2> `;
    const ul = document.createElement('ul');
    ul.innerHTML =`Instructions are not available `;
    instructionsContainer.append(ul);
    return instructionsContainer;

    }else{
    const instructionsContainer = document.createElement('div');
    const ul = document.createElement('ul');
    instructionsContainer.classList.add('instructions');
    instructionsContainer.innerHTML =`<h2 class='title'>Instructions</h2>`;

    instructi[0].steps.forEach(instruction => {
        
        const {number, step} = instruction;
        ul.innerHTML +=`<li>${number} - ${step}</li> `;
    });
    instructionsContainer.append(ul);
    return instructionsContainer;
    }
};

const createRecipeDetail= (id,name,nutrition,ingridients,instructions)=>{
   
    const recipeDetailContainer = document.createElement('div')
    recipeDetailContainer.id= `full`;
    const html1 =createNutritionDetail(nutrition);      
    const html2 =createIngridientsDetail(ingridients); 
    const html3 =createInstructionsDetail(instructions); 
        

    recipeDetailContainer.innerHTML =`
    <button  id='btnBack' ><i class="fas fa-long-arrow-alt-left"></i></button>
    <h2> ${name}</h2>
    <div class="full--img">
        <img src="https://spoonacular.com/recipeImages/${id}-556x370.jpg" alt="Full recipe">
    </div>`;
    
    const fullContainer =document.createElement('div');
    fullContainer.classList.add('full--container')
    // const top =document.createElement('div');
    // top.classList.add('top')
    // top.append(html1,html2)
    fullContainer.append(html1,html2,html3)
    
    recipeDetailContainer.append(fullContainer);
    console.log(recipeDetailContainer);

    return recipeDetailContainer;
                  
};


export { showSearchInput ,createFavoriteRecipes ,createSearchRecipes,createRecipeDetail}