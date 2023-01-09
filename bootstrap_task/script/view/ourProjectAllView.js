let allImages=document.querySelector(".all-images");
const URL="http://localhost:3000/our-recent-project-all";

import { getApiRequest } from "../fetch/fetchAPI.js";

export async function displayAllProject(){
    let data= await getApiRequest(URL);
    let HTMLMarkup=data.map(cValue=>`
    <div class="col-sm-4 project-images">
    <img src="${cValue.image_URL}" alt="hai">
</div>`);
allImages.innerHTML+=HTMLMarkup.join("");
}