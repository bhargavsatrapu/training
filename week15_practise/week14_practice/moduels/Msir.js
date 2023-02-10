import {addItemToBill} from './.....js';
import {menus} from '...../.js'


let menuContainerEl = document.querySelector('#menu');

let htmlMarkup = '';

for(let item in menus){
    htmlMarkup += `
        <div onclick="${addItemToBill(item.id)}">
            <p>${item.item}</p>
            <p>${item.price}</p>
        </div>
    `
}
