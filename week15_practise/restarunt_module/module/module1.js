
var URL = "http://localhost:3000/menu";
var orderItems = [];

import gettingItemdata from "./module2.js"

gettingItemdata(URL);

import {  displayTable,quantityChanage } from "./module3.js";

function addCart(index) {

    orderdItems.innerHTML = "";
    orderItems.push({
        "name": menuItems[index].name,
        "price": menuItems[index].price,
        "quantity": 1
    });
    console.log(orderItems);
    displayTable();
}
