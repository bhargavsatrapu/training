
import {box,testFun} from "./module1.js"

// let val = testFun();
// console.log(val);
// box.innerHTML+=`<div class="inner" onclick=""></div>`;

let data = [10, 20, 30];
let updatedData = data.map(n=>n+10); // [20, 30, 40]
// let otherData = data.map(n=>`<div>${n}</div>`) // ['<div>10</div>', '<div>20</div>', '<div>30</div>']
// console.log(otherData.join(''));
let htmlMarkup = `
    ${
        data.map(val=>(
            `<button class="menuItem">${val}</button>`
        )).join('')
    }
`

box.innerHTML = htmlMarkup;
// // box.insertAdjacentElement('afterbegin', '<div>Hello</div>');
// let elementBox = document.getElementsByClassName('.xyz');

// elementBox.forEach(el => (
//     el.addEventListner('click', testFun)
// ));

