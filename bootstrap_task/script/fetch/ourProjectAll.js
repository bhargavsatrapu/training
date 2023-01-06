
const URL="http://localhost:3000/our-recent-project-all";
import {displayAllProject} from "../view/ourProjectAllView.js";

export async function fetchprojectAll(){
    let response=await fetch(URL);
    let data=await response.json();
    displayAllProject(data);
}