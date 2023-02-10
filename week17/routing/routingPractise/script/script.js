

let rootElement = document.getElementById("root");
let hash;
async function fetchPage(url) {
    let response = await fetch(url);
    return await response.text();
}

async function initial() {
    rootElement.innerHTML = await fetchPage("../view/about.html");
}

initial();

function onNavClick(x) {
    hash = x;
    console.log(location.origin + hash);
    window.history.pushState({}, "", location.origin + hash);
}

window.addEventListener("popstate", function () {
    alert("hai");
    // rootElement.innerHTML = await fetchPage("../view" + hash);
});