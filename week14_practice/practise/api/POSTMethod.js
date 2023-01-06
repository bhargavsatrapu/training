
import { fetchApi } from "./module1.js";
import { BASE_URL } from "./config.js";

export async function postDataAPI(){
    let postdData={
        name:"bhargav",
        village:"ganguvada",
        age:"21",
        friends:"kiran loku jagadish chandra srinu"
    }

   let obj={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(postdData)
    }
   await fetchApi(BASE_URL,obj);
}
