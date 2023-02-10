

import { rootElement, homeNav, aboutNav, contactNav } from "./domElements.js";
import { homeData } from "./homePage.js";
import { aboutData } from "./aboutUsPage.js";
import { contactData } from "./contactPage.js";

let routes = {
    "/": function () {
        homeData()
    },
    "/about": function () {
        aboutData()
    },
    "/contact": function () {
        contactData()
    }
}

homeNav.addEventListener("click", function (event) {
    event.preventDefault();
    history.pushState({},"",event.target.href)
    routes[event.target.pathname]();
})

aboutNav.addEventListener("click", function (event) {
    event.preventDefault();
    history.pushState({},"",event.target.href)
    routes[event.target.pathname]();
})

contactNav.addEventListener("click", function (event) {
    event.preventDefault();
    history.pushState({},"",event.target.href)
    routes[event.target.pathname]();    
})

window.onpopstate=function(){
 routes[location.pathname]();  
}
