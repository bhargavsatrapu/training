
import { rootElement } from "./domElements.js";

export function homeData(){
    let htmlMarkup=`
    <h1>I am From home Page</h1>`
    rootElement.innerHTML=htmlMarkup;
}