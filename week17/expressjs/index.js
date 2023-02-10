
var express=require("express");
var app=express();

app.use(express.json());

app.listen(3000,function(){
    console.log("server running ..");
})

let data=[
    {
        "id":"1",
        "name":"akhil"
    },
    {
        "id":"2",
        "name":"akhil"
    },
    {
        "id":"3",
        "name":"akhil"
    },
    {
        "id":"4",
        "name":"akhil"
    },
    {
        "id":"5",
        "name":"akhil"
    },
    {
        "id":"6",
        "name":"akhil"
    },
    {
        "id":"7",
        "name":"akhil"
    },
    {
        "id":"8",
        "name":"akhil"
    },
    {
        "id":"9",
        "name":"akhil"
    },
    {
        "id":"10",
        "name":"akhil"
    },
    {
        "id":"11",
        "name":"akhil"
    },
    {
        "id":"12",
        "name":"akhil"
    },
    {
        "id":"13",
        "name":"akhil"
    },
    {
        "id":"14",
        "name":"akhil"
    },
    {
        "id":"15",
        "name":"akhil"
    },
    {
        "id":"16",
        "name":"akhil"
    },
    {
        "id":"17",
        "name":"akhil"
    },
    {
        "id":"18",
        "name":"akhil"
    },
    {
        "id":"19",
        "name":"akhil"
    },
    {
        "id":"20",
        "name":"akhil"
    },
]

app.get("/users",(req,res)=>{
    console.log(req.query);
    let queryObj=req.query;
    let start=(parseInt(queryObj._page)*5)-5;
    //let end=start+parseInt(queryObj._limit);
    let end=start+5;
    //console.log(typeof end);
    let userPropose=data.slice(start,end);

    res.send({
        "success":true,
        "message":"data fetched success fully",
        "data":userPropose
    })
})