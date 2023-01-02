

var bodyContent=document.querySelector(".body-content");
export var URL="http://localhost:3000/service";

export async function getServecies(url){

    var response=await fetch(url);
    var servecies=await response.json();
    displayServecies(servecies)
}

function displayServecies(x){

    var htmlMarkup=x.map(value=>{
        if(value.status=="active"){
        return `
     <div class="body-div">
     <div>
         <img class="project-image" src=${value.image_URL} alt="hai">
     </div><br>
     <div class="project-details">
         <h3 class="title">${value.title}</h3>
         <p class="type">${value.type}</p><br>
         <p class="content">
            ${value.content}
         </p>
     </div>
    </div>
     `}}).join("");
    
     bodyContent.innerHTML+=htmlMarkup;

}