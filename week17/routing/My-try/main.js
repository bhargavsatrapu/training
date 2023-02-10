const route = (event) => {
    event = event || window.event;
    console.log(event)
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
    404: "./404.html",
    "/": "./home.html",
    "/about": "./about.html",
    "/contact": "./contact.html"
}

const handleLocation = async () => {
    var path = window.location.pathname;
    console.log(path);
    if (path == "/My-try/") {
        path = "/"
    }
    const route = routes[path] || routes[404];
    console.log(route)
    const html = await fetch(route);
    let x=await html.text();
    console.log(x);
    document.getElementById("main-page").innerHTML = x;
}
window.onpopstate = handleLocation;
window.route = route;
handleLocation();