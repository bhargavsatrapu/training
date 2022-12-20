
var menuItems;
var orderItems = [];
var sum=0;
var charge;
var  dis;
var discountA;
var paidAmount;
var taxAmount;
var URL = "http://localhost:3000/menu"
var  ordeItems ;


var bodyLeft = document.querySelector(".body-left");
var orderdItems = document.querySelector(".orderd-items");
var clearBtn= document.querySelector(".clear");
var itemName= document.getElementsByClassName("item-name");
var itemPrice= document.getElementsByClassName("item-price");
var chargeAmount= document.querySelector(".charge-amount");
var tax= document.querySelector(".tax");
var dPercentage= document.querySelector(".dpercentage");
var discountAmount= document.querySelector(".discount-amount");
var phNO= document.querySelector(".ph_no");
var orderTicket= document.querySelector(".order-ticket");
var containerBody= document.querySelector(".container-body")
var containerBody2= document.querySelector(".container-body2")
var billingTableContent= document.querySelector(".billing-table-content");
var orders= document.querySelector(".orders")
var current= document.querySelector(".current")
var modalBody= document.querySelector(".modal-body")
var popupModal= document.querySelector(".popup-modal")

orderTicket.addEventListener("click",order)
orders.addEventListener("click",getOrderData)
current.addEventListener("click",viewItems)


clearBtn.onclick=function(){
    orderdItems.innerHTML = "";
    orderItems = [];
}

async function gettingItemdata() {

    var response = await fetch(URL);
    menuItems = await response.json();
    console.log(menuItems);
    displayMenu();
}
gettingItemdata();
function displayMenu() {
    console.log(menuItems.length);
    for (let i in menuItems) {
        bodyLeft.innerHTML += ` <div class="item" onclick="addCart(${i})">
        <h4 class="item-name">${menuItems[i].name}</h4>
        <p class="item-price">${menuItems[i].price}</p>
    </div>`;
    }
}

function addCart(index) {
    orderdItems.innerHTML = "";

   orderItems.push({
    "name":menuItems[index].name,
    "price":menuItems[index].price,
    "quantity":1
   });

   console.log(orderItems);
   displayTable();
}

function displayTable(){
    orderdItems.innerHTML = "";
    sum=0;
    for (let i in orderItems) {
        orderdItems.innerHTML += `<tr>
        <td class="item-name">${orderItems[i].name}</td>
        <td><input type="text" value="${orderItems[i].quantity}" onchange="akhil(${i})" class="enter-quantity"></td>
        <td class="item-price">${orderItems[i].price*orderItems[i].quantity}</td>
    </tr>`;
    sum+=orderItems[i].price*orderItems[i].quantity;
    }
    dFunction();
}


function akhil(id){
    var enterQuantity= document.querySelector(".enter-quantity");
    console.log(enterQuantity.value);
   orderItems[id].quantity=enterQuantity.value;
    displayTable();
}

function dFunction(){
  dis=dPercentage.value;
console.log(sum)
 discountA=(sum*dis)/100;
 discountAmount.innerHTML=discountA;
 taxAmount=(sum-discountA)*4/100;
 tax.innerHTML=taxAmount;
 paidAmount=(sum-discountA)+taxAmount;
 chargeAmount.innerHTML="Charge "+paidAmount;
 console.log(taxAmount);
}

function order(){
    userId=phNO.value;

    if(userId==""){
        alert("ENTER NAME")
    }else if(orderItems.length==0){
        alert("SELECT AN ITEAM")
    }
    else{
   
    console.log(orderItems);
     
    var body={
        customer_name:userId,
        discount:discountA,
        billAmount:paidAmount,
        orders:orderItems
    }
    postData(body);
}
}

async function postData(body){
    var pData=fetch("http://localhost:3000/orders",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    });
    alert("submitted succesfully");
    orderdItems.innerHTML = "";
    orderItems = [];
}

async function getOrderData(){
    var response = await fetch("http://localhost:3000/orders");
     ordeItems = await response.json();
        //alert("hai");
    for(var k in ordeItems){
        billingTableContent.innerHTML+=`
        
        <tr>
        <td>${parseInt(k)+1}</td>
        <td>${ordeItems[k].id}</td>
        <td>${ordeItems[k].customer_name}</td>
        <td>${ordeItems[k].billAmount}</td>
        <td><button class="view-summary" onclick="orderSummary(${k})">comming soon..</button></td>
    </tr>
        `
        containerBody.style.display="none";
        containerBody2.style.display="block";
    }
}

function viewItems(){
    containerBody.style.display="block";
    containerBody2.style.display="none";
    billingTableContent.innerHTML="";
}

function orderSummary(k){
    containerBody2.style.display="none";
    popupModal.style.display="block";
    console.log(ordeItems[k].orders.length);
    for(let p=0;p<ordeItems[k].orders.length;p++){
        console.log(ordeItems[k].orders[p]);
        modalBody.innerHTML+= `<p class="modal-p">${ordeItems[k].orders[p].name} = ${ordeItems[k].orders[p].price}*${ordeItems[k].orders[p].quantity}</p>`
    }
    modalBody.innerHTML+=`<p class="modal-p">appling discount = ${ordeItems[k].discount}</p>`
    modalBody.innerHTML+=`<p class="modal-p">gst = 4% on total</p>`
    modalBody.innerHTML+=`<p class="modal-p">total payble = ${ordeItems[k].billAmount}</p>`
}
