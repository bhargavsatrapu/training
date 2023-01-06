
const URL="http://localhost:3000/testimonials";
import {displayTestmonial} from "../view/displayTesmonial.js"
// to get tesmonial data
export async function fetchTestimonial(){
    let response=await fetch(URL);
    let data=await response.json();
   displayTestmonial(data);
}

