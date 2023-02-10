


import { BASE_URL } from "./config.js";
import {fetchApi} from "./module1.js";
import {postDataAPI} from "./POSTMethod.js";

params();

function params(){
    let obj={
        _page:1,
        _limit:8
    }
    validURL(obj);
}

function validURL(params){
    let query=[];
    let querString;
   if(params){
    for(const x in params){
        query.push(`${x}=${params[x]}`)
    }
     querString=`?${query.join("&")}`
   }else{
        querString="";
   }
  console.log(querString);
   fetchApi(BASE_URL+querString);
}
// 
//postDataAPI();