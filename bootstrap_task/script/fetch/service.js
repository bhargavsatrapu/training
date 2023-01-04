
const URL="http://localhost:3000/service";

import {displayService} from "../view/displayServices.js"
// to get services data from database
export async function fetchServices(){
    let responce=await fetch(URL);
    let services=await responce.json();
    displayService(services);
    
}