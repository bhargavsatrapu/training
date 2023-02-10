
const URL="http://localhost:3000/postsWorks";

let uName=document.querySelector(".sub-name");
let uEmail=document.querySelector(".sub-email");
let uContactNumber=document.querySelector(".sub-number");
let uWorkType=document.querySelector("#wort-select");
let uAddress=document.querySelector(".textarea");
let submitButton=document.querySelector(".submit-button");
let navBar=document.getElementsByTagName("li");
let about=document.querySelector(".about");
let myServices=document.querySelector(".my-services");
let whatIdid=document.querySelector(".what-i-did");
let contactUs=document.querySelector(".contact-us");
submitButton.addEventListener("click",colletData);

navBar[1].addEventListener("click",function(){
    about.style.display="block";
    myServices.style.display="none";
    whatIdid.style.display="none";
    contactUs.style.display="none";
})
navBar[2].addEventListener("click",function(){
    myServices.style.display="block";
    about.style.display="none";
    whatIdid.style.display="none";
    contactUs.style.display="none";
})
navBar[3].addEventListener("click",function(){
    whatIdid.style.display="block";
    about.style.display="none";
    myServices.style.display="none";
    contactUs.style.display="none";
})
navBar[4].addEventListener("click",function(){
    contactUs.style.display="block";
    about.style.display="none";
    myServices.style.display="none";
    whatIdid.style.display="none";
})

function colletData(){
    alert("hai");
    let coustomerData={
        name:uName.value,
        email:uEmail.value,
        contact_number:uContactNumber.value,
        work_type:uWorkType.value,
        address:uAddress.value
    }
    console.log(coustomerData);
    postApiData(coustomerData);
}


async function postApiData(data){
    let response=await fetch(URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
}