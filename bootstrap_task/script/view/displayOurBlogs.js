

const URL="http://localhost:3000/our_blogs";
let ourBlogs=document.querySelector(".our-blogs");

import { getApiRequest } from "../fetch/fetchAPI.js";

export async function displayOurblogs(){
    let data= await getApiRequest(URL);
    console.log(data);
    let HTMLMarkup=data.map(cValue=>`
    <div class="col-sm-4">
                    <div class="card" style="width: 18rem;min-height: 500px;">
                        <img src="${cValue.image_URL}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${cValue.title}</h5>
                            <p class="card-text content">${cValue.content}</p>
                            <a href="#" class="btn btn-primary button-color">Read more</a>
                        </div>
                    </div>
                </div>`);
                ourBlogs.innerHTML+=HTMLMarkup.join("");
}