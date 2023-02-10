


export async function fetchApi(URL,obj=null){
    console.log(URL);
    let response=await fetch(URL,obj);
    let data =await response.json();
    console.log(data);
}   