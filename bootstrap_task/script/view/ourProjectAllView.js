let allImages=document.querySelector(".all-images");

export function displayAllProject(data){
    let HTMLMarkup=data.map(cValue=>`
    <div class="col-sm-4 project-images">
    <img src="${cValue.image_URL}" alt="hai">
</div>`);

allImages.innerHTML+=HTMLMarkup.join("");
}