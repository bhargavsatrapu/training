
var servseTableBar=document.querySelector(".servse-table-bar");

var data;
 export async function getData(){
    let responce=await fetch("http://localhost:3000/service");
    data=await responce.json();
    console.log(data);
    showData();
 }

 function showData(){
 var htmlMarkup=data.map(value=>
    `<tr>
    <td>${value.id}</td>
    <td>${value.status}/td>
    <td>${value.title}</td>
    <td>${value.type}</td>
    <td>${value.image_URL}</td>
    <td>${value.content}</td>
</tr>`).join("");
 servseTableBar.innerHTML+=htmlMarkup;
 }