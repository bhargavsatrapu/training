 var pageNo=1;
 var pageSize=10;
 var noOfPage;
 var lowLimit;
 var upLimit;
 var ingredientItems=[];

  
 var recipeList=document.querySelector(".recipe-list");
 var previousButton=document.querySelector(".previous-button");
 var nextButton=document.querySelector(".next-button");
 var previousPage=document.querySelector(".previous-page");
 var nextPage=document.querySelector(".next-page");
 var searchButton=document.querySelector(".search-button");
 var ingredientList=document.querySelector(".ingredient-list");
 var cookingOwner=document.querySelector(".cooking-owner");
 var cookingTime=document.querySelector(".cooking-time");
 var noServings=document.querySelector(".no-servings");
 var containorImage=document.querySelector(".containor-image");
 var recipeName=document.querySelector(".recipe-name-0");
 var  loding1=document.querySelector(".loding-1");
 var  error1=document.querySelector(".error1");
 var  welcomeText=document.querySelector(".welcome-text");
 var rightInnerContainer=document.querySelector(".right-inner-container");
 var  iconPlus=document.querySelector(".icons-plus");
 var  iconMinus=document.querySelector(".icons-minus");

  previousButton.addEventListener("click",pagePrevious);
  nextButton.addEventListener("click",pageNext);
  searchButton.addEventListener("click",json1);
  previousButton.style.display="none";
 nextButton.style.display="none";


 iconPlus.addEventListener("click",function(){
	n++;
	calculation();
 })

 iconMinus.addEventListener("click",function(){
	n--;
	calculation();
 })

 /*
    1.this function initiate all functions.
    2.This function doesn't require any parameters.
   3.It doesn't have return type.
   4.it is called at globel space.
 */
function startingFunction(){
	
	noOfPage=Math.ceil(jData.data.recipes.length/pageSize);
	
	if(pageNo==noOfPage){
		 if(jData.data.recipes.length%pageSize==0){
			upLimit=(pageNo*pageSize);
		 }else{
			 upLimit=(pageNo*pageSize)-pageSize+(jData.data.recipes.length%pageSize);
		 }
	}else{
		upLimit=(pageNo*pageSize);
	}
	lowLimit=(pageNo*pageSize)-pageSize;
	dispayRecipeMenu();
}

//startingFunction();
 
 /*1. This function is called at startingFunction() function.
   2.This function doesn't require any parameters.
   3.It doesn't have return type.
   4.this function displays recipe items in recipe-list.   */
 function dispayRecipeMenu(){
	 //console.log('checke function call', recipeClick);
	 loding1.style.display="none";
	 
	   recipeList.innerHTML="";
   for(var i=lowLimit;i<upLimit;i++){
	  
	   recipeList.innerHTML+=`<li onclick="showContent('${jData.data.recipes[i].id}')">
	                                               <div class="recipe-menu">
															<div class="recipe-image">
																<img src="${jData.data.recipes[i].image_url}" alt="hai" class="menu-image">
															</div>
															<div class="recipe-content">
																<h4>${jData.data.recipes[i].title}</h4>
																<p>${jData.data.recipes[i].publisher}</P>
															</div>
													</div>      
												</li>	`								
 }
 
 }
 
 /*
 1.this function called at onclick event listener.
 2.this function shifts to previous page.
 */
 function pagePrevious(){
	  pageNo--;
	  
	 if(pageNo==1){
		 previousButton.style.display="none";
	     nextButton.style.display="block";
	 }else{
		nextButton.style.display="block";
	 }
	 previousPage.innerHTML=`page ${pageNo-1}`;
	 nextPage.innerHTML=`page ${pageNo+1}`;
	 recipeList.innerHTML="";
	 startingFunction();
 }
 
 
 
  /*
 1.this function called at onclick event listener.
 2.this function shifts to next page.
 */
  function pageNext(){
	   pageNo++;
	   
	   if(pageNo==noOfPage){
		 nextButton.style.display="none";
	     previousButton.style.display="block";
	   }else{
	    previousButton.style.display="block";
	   }
	   previousPage.innerHTML=`page ${pageNo-1}`;
	   nextPage.innerHTML=`page ${pageNo+1}`;
	   recipeList.innerHTML="";
	   startingFunction();
 }

 
function calculation(){
    ingredientItems=[];
    for(let p in currentRecipe.data.recipe.ingredients){

        let m;
        if(currentRecipe.data.recipe.ingredients[p].quantity==null){
            m="";
        }else{
            m=(currentRecipe.data.recipe.ingredients[p].quantity*n)/4;
        }

        ingredientItems.push({
            "quantity": m,
            "unit": currentRecipe.data.recipe.ingredients[p].unit,
            "description":currentRecipe.data.recipe.ingredients[p].description 
        })
    }
    console.log(ingredientItems);
    displayRecipeContent();
}
 
 //displayRecipeContent();
 
 
 /*
 1.this function called at showContent function.
 2.tis won't have return type.
 3.it won't accept parameters.
 4.it is use to display the content of recipe at right side bar
 */
 
 function displayRecipeContent(){
	ingredientList.innerHTML=""
	welcomeText.style.display="none";
	rightInnerContainer.style.display="block";
	for(var k=0;k<ingredientItems.length;k++){
			ingredientList.innerHTML+=`<li>
	<p>${ingredientItems[k].quantity} ${ingredientItems[k].unit} ${ingredientItems[k].description}</p>
			</li>`
	}
	        cookingOwner.innerHTML=currentRecipe.data.recipe.publisher;
			cookingTime.innerHTML=currentRecipe.data.recipe.cooking_time;
			//noServings.innerHTML=currentRecipe.data.recipe.servings;
			noServings.innerHTML=n;
			containorImage.style.backgroundImage=`url('${currentRecipe.data.recipe.image_url}')`;
			recipeName.innerHTML=currentRecipe.data.recipe.title;
}
 
 
