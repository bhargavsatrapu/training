
let renderDiv = document.querySelector(".render-div");

let routes={
    "#about":"./view/about.html",
    "#home":"./view/home.html",
    "#contact":"./view/contact.html",
    "#error":"./view/error.html"
}

if (!location.hash) {
    location.hash = "#about"
}

async function fetchApi(url) {
    let response = await fetch(url);
    return await response.text();
}

async function startingFun() {
    renderDiv.innerHTML = await fetchApi(routes["#about"]);
}
startingFun();

window.onhashchange = async function () {
    if(routes[location.hash]){
    history.pushState({}, "", location.href)
    }else{
        renderDiv.innerHTML = await fetchApi(routes["#error"]);
    }
}

window.onpopstate = async function () {
    renderDiv.innerHTML = await fetchApi(routes[location.hash]);
}