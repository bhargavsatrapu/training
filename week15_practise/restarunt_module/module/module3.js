
var charge;
var dis;
var discountA;
var sum = 0;
var paidAmount;
var taxAmount;
var orderdItems = document.querySelector(".orderd-items");
var dPercentage = document.querySelector(".dpercentage");
var discountAmount = document.querySelector(".discount-amount");
var tax = document.querySelector(".tax");
var chargeAmount = document.querySelector(".charge-amount");

 
export function displayTable() {
    orderdItems.innerHTML = "";
    sum = 0;
    for (let i in orderItems) {
        orderdItems.innerHTML += `<tr>
        <td class="item-name">${orderItems[i].name}</td>
        <td><input type="text" value="${orderItems[i].quantity}" onchange="quantityChanage(${i})" class="enter-quantity"></td>
        <td class="item-price">${orderItems[i].price * orderItems[i].quantity}</td>
    </tr>`;
        sum += orderItems[i].price * orderItems[i].quantity;
    }
    dFunction();
}

export function quantityChanage(id) {
    var enterQuantity = document.querySelectorAll(".enter-quantity");
    console.log(enterQuantity.value);
    orderItems[id].quantity = enterQuantity[id].value;
    displayTable();
}

function dFunction() {
    dis = dPercentage.value;
    console.log(sum)
    discountA = (sum * dis) / 100;
    discountAmount.innerHTML = discountA;
    taxAmount = (sum - discountA) * 4 / 100;
    tax.innerHTML = taxAmount;
    paidAmount = (sum - discountA) + taxAmount;
    chargeAmount.innerHTML = "Charge " + paidAmount;
    console.log(taxAmount);
}

