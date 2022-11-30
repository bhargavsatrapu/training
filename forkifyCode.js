


var pageNo=1;

 var recipeList=document.querySelector(".recipe-list");
 var previousButton=document.querySelector(".previous-button");
 var nextButton=document.querySelector(".next-button");
 
 
 
  previousButton.addEventListener("click",pagePrevious);
  nextButton.addEventListener("click",pageNext);
 
 
 
 
 
 initial();
 
 function initial(){
 
   for(var i=(pageNo*10)-10;i<pageNo*10;i++){	   
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
 
 function pagePrevious(){
	 if(pageNo==1){
		 previousButton.display="none";
	 }else{
	 pageNo--;
	 recipeList.innerHTML="";
	 initial();
	 }
 }
 
  function pageNext(){
	   if(pageNo==3){
		 nextButton.display="none";
	   }else{
	 pageNo++;
	  recipeList.innerHTML="";
	 initial();
	   }
 }