

var bodyContent=document.querySelector(".body-content")

var data;
 export async function getData(){
    let responce=await fetch("http://localhost:3000/service");
    data=await responce.json();
    console.log(data);
    showData();
 }

 function showData(){
 var htmlMarkup=data.map(value=>{
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