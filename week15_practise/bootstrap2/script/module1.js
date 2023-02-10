


import { URL, container } from "./module2.js"

export async function fetchData() {
    let response = await fetch(URL);
    let data = await response.json();
    displayCart(data);
}

function displayCart(data) {
    let HTMLMarkup = data.map(value => `
    <div class="card" style="width: 18rem;float:left;">
        <img class="card-img-top" src="${value.image_url}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${value.card_title}</h5>
          <p class="card-text">${value.content}</p>
        </div>
      </div>`);
    container.innerHTML += HTMLMarkup.join("");
}