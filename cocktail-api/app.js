const dinoGetMeADrink = document.getElementById('dino-get-cocktail');
const dinoCocktail = document.getElementById('dino-cocktail');

dinoGetMeADrink.addEventListener('click', async()=>{
    let {strAlcoholic, strCategory, idDrink, strDrink, strDrinkThumb}= await getRandomDrink();
    let allData = await getRandomDrink();
    let ingredients = getFiveFirstIngredients(allData);
    console.log(ingredients);
    let htmlEl =  randomDrinkHTML(strDrink,strCategory, strAlcoholic, strDrinkThumb, ingredients);
    dinoCocktail.innerHTML = htmlEl;
})

const getRandomDrink = async() =>{
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    let data = await response.json();
    return  data.drinks[0]; 
}

const getFiveFirstIngredients = (mydata) =>{
    let num = [1,2,3,4,5];
    let ingredientsArr = [];
    for(const [key, value] of Object.entries(mydata)){
        for(let i = 0; i<num.length; i++){
            if(key === ('strIngredient'+num[i])){
                ingredientsArr.push(value)
            }
        }
    }
    return ingredientsArr;    
}
const randomDrinkHTML = (name, category, type, image, ingredients) =>{
    console.log(ingredients)
    let card = `
        <aside class="bg-gray-200 border-slate-700 rounded-md m-2 p-2 w-fit" >
            <h4 class="text-pop-green text-2xl tracking-wider font-bold text-center underline">${name}</h4>
            <div class="flex flex-row marker my-2 ">
                <h5 class="text-sm mr-2 text-pop-purple"><span class="bg-pop-salmon text-white p-[1px] text-sm">Type :</span> ${type}</h5>
                <h5 class="text-sm mr-2 text-pop-purple"><span class="bg-pop-salmon text-white p-[1px] text-sm"">Type :</span> ${category}</h5>
            </div>
            <h5 class="text-sm mr-2 text-pop-purple"><span class="bg-pop-salmon text-white p-[1px] text-sm">Ingrédients : </span></h5>
                <ul>`

    ingredients.forEach(element => {
        if(element) card +='<li class="text-sm text-pop-purple">🍶 '+ element +'</li>'
    })
    card += `<ul>
            <figure class="w-full flex flex-col items-center my-2">
                <img src="${image}" alt="${name} cocktail illustration" width="200px" />
                <figcaption class="text-xs italic">* suggestion de présentation</figcaption>
            </figure>
        </aside>
    `
    return card;
}