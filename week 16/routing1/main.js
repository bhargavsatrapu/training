
var myDiv=document.getElementById("app");

let hashContent={
    akhil:"i am akhil",
    kiran:"i am kiran",
    bhargav:"i am a bhargav"
}

if(!location.hash){
    location.hash="#akhil";
}

displayContent();

addEventListener("hashchange",displayContent);


function displayContent(){
    myDiv.innerHTML=location.hash.substr(1);
}

