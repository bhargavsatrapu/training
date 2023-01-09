
export async function getApiRequest(URL){
     let response=await fetch(URL);
     let apiData=await response.json();
        return apiData;
} 