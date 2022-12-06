


 var pageNo=1;
 var pageSize=10;
 var noOfPage;
 var lowLimit;
 var upLimit;
  
 var recipeList=document.querySelector(".recipe-list");
 var previousButton=document.querySelector(".previous-button");
 var nextButton=document.querySelector(".next-button");
 var previousPage=document.querySelector(".previous-page");
 var nextPage=document.querySelector(".next-page");
 
 
  previousButton.addEventListener("click",pagePrevious);
  nextButton.addEventListener("click",pageNext);
  previousButton.style.display="none";
 
 noOfPage=Math.ceil(jData.recipes.length/pageSize);
 startingFunction();
 
 /*
    1.this function initiate all functions.
    2.This function doesn't require any parameters.
   3.It doesn't have return type.
   4.it is called at globel space.
 */
function startingFunction(){
	
	if(pageNo==noOfPage){
		 if(jData.recipes.length%pageSize==0){
			upLimit=(pageNo*pageSize);
		 }else{
			 upLimit=(pageNo*pageSize)-pageSize+(jData.recipes.length%pageSize);
		 }
	}else{
		upLimit=(pageNo*pageSize);
	}
	lowLimit=(pageNo*pageSize)-pageSize;
	dispayRecipeMenu();
}
 
 
 /*1. This function is called at startingFunction() function.
   2.This function doesn't require any parameters.
   3.It doesn't have return type.
   4.this function displays recipe items in recipe-list.   */
 function dispayRecipeMenu(){
   for(var i=lowLimit;i<upLimit;i++){
	   recipeList.innerHTML+=`<li>
	                                               <div class="recipe-menu">
															<div class="recipe-image">
																<img src="${jData.recipes[i].image_url}" alt="hai" class="menu-image">
															</div>
															<div class="recipe-content">
																<h4>${jData.recipes[i].title}</h4>
																<p>${jData.recipes[i].publisher}g</P>
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
 
 