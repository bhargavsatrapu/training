
var newTitle=document.querySelector(".new-title");
var newType=document.querySelector(".new-type");
var newURL=document.querySelector(".new-URL");
var newContent=document.querySelector(".new-content");
var newStatus=document.querySelector(".new-status");
var URL=""
export var submitButton=document.querySelector(".submit-button");

export async function insertData(){
    var insertedData={
        status:newStatus.value,
        title:newTitle.value,
        type:newType.value,
        image_URL: "../images/"+newURL.value,
        content:newContent.value
    }

  var responce=await fetch("http://localhost:3000/service",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(insertedData)
  });
  console.log(responce);
  alert("hai");
}


