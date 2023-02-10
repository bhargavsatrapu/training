
var menuItems;
var bodyLeft = document.querySelector(".body-left");


export async function gettingItemdata(URL) {
    var response = await fetch(URL);
    menuItems = await response.json();
    console.log(menuItems);
    displayMenu();
}

function displayMenu() {
    console.log(menuItems.length);
    for (let i in menuItems) {
        bodyLeft.innerHTML += ` <div class="item" onclick="addCart(${i})">
        <h4 class="item-name">${menuItems[i].name}</h4>
        <p class="item-price">${menuItems[i].price}</p>
    </div>`;
    }
}

export default gettingItemdata;