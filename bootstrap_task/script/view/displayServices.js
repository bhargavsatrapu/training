
let serviceSection=document.querySelector(".service-section");

// to display content in our service bar
export function displayService(services){
let HTMLMarkup=services.map(cValue=>` <div class="col-sm-4 body-div">
<div>
    <img class="project-image" src=${cValue.image_URL} alt="hai">
</div><br>
<div class="project-details">
    <h3 class="title">${cValue.title}</h3>
    <p class="type">${cValue.type}</p><br>
    <p class="content">
    ${cValue.content}
    </p>
</div>
</div>`);
serviceSection.innerHTML=HTMLMarkup.join("");
}