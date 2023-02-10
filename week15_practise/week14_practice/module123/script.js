


import { wrapperClass,tFun } from "./script1.js";
//var inerrArr=document.querySelectorAll(".inner");

for(var i=0;i<5;i++){
wrapperClass.innerHTML+=`<div class="inner" id="${i}">
                                </div>`

   var y=document.getElementById(`${i}`);
   console.log(y);
   y.addEventListener("click",testFun)
}

function testFun(){
    console.log(this);
}