

const express = require("express");

const app = express();

app.use(express.json());

app.listen(4000, () => {
    console.log("server is running");
})


let jsonObj={

 contacts:[
    {
        "id": "1",
        "name": "akhil"
    } ,
     {
        "id": "2",
        "name": "kiran"
    },
    {
        "id": "3",
        "name": "venky"
    },
    {
        "id": "4",
        "name": "bhargav"
    },
    {
        "id": "5",
        "name": "chandra"
    },
    {
        "id": "6",
        "name": "rock"
    }
],
informations:[]


}

app.get("/contact", (req, res) => {
    res.send({
        success: true,
        message: "data fetched successfully",
        data: jsonObj.contacts
    })
})

app.post("/contact", (req, res) => {
    console.log(req);
    let name = req.body.name;

    if (name) {
        jsonObj.contacts.push({
            id: (jsonObj.contacts.length + 1).toString(),
            name: name,
        })

        res.send({
            success: true,
            message: "data posted succes fully",
            data: jsonObj.contacts[jsonObj.contacts.length - 1]
        })
    }else{
        res.send({
            success:false,
            message:"name connot be null"
        });
    }
})

app.delete("/contact/:id",(req,res)=>{
    console.log(req.params);
    var id=req.params.id;
    console.log(id);
    jsonObj.contacts.splice(id,1);
    res.send({
        success:true,
        message:"data deleted successfully"
    })
})

app.put("/contact/:id",(req,res)=>{
    console.log(req.params);
    let id=req.params.id;
    let name = req.body;
    name.id=id;
    jsonObj.contacts[id]=name;

    res.send({
        success: true,
        message: "data puted succes fully",
        data: jsonObj.contacts[id]
    })
})


app.patch("/contact/:id",(req,res)=>{
   
    let id=req.params.id;
    let obj=jsonObj.contacts[id];
    let name = req.body;
    console.log(name);
    for(let i in name){
        console.log(i);
        obj.prototype[i]=name[i];
    }

    jsonObj.contacts[id]=obj;
    
    res.send({
        success: true,
        message: "data puted succes fully",
        data: jsonObj.contacts[id]
    })   
})


app.get("/informations", (req, res) => {
    res.send({
        success: true,
        message: "data fetched successfully",
        data: jsonObj.informations
    })
})

app.post("/informations", (req, res) => {
    console.log(req);
    let name = req.body;
    

    if (name) {
        name.id=(jsonObj.informations.length + 1).toString();
        jsonObj.informations.push(name)

        res.send({
            success: true,
            message: "data posted succes fully",
            data: jsonObj.informations[jsonObj.informations.length - 1]
        })
    }else{
        res.send({
            success:false,
            message:"name connot be null"
        });
    }
})

app.delete("/informations/:id",(req,res)=>{
    console.log(req.params);
    var id=req.params.id;
    console.log(id);
    jsonObj.informations.splice(id,1);
    res.send({
        success:true,
        message:"data deleted successfully"
    })
})

app.put("/informations/:id",(req,res)=>{
    console.log(req.params);
    let id=req.params.id;
    let name = req.body;
    name.id=id;
    jsonObj.informations[id]=name;

    res.send({
        success: true,
        message: "data puted succes fully",
        data: jsonObj.informations[id]
    })
})


app.patch("/informations/:id",(req,res)=>{
   
    let id=req.params.id;
    let obj=jsonObj.informations[id];
    let name = req.body;
    console.log(name);
    for(let i in name){
        console.log(i);
        obj.prototype[i]=name[i];
    }

    jsonObj.informations[id]=obj;
    
    res.send({
        success: true,
        message: "data puted succes fully",
        data: jsonObj.informations[id]
    })   
})








// // app.use() Method Demo Example

// // Importing the express module
// const express = require('express');

// // Initializing the express and port number
// var app = express();

// // Initializing the router from express
// var router = express.Router();
// var PORT = 3000;

// // This method will call the next() middleware
// app.use('/api', function (req, res, next) {
//    console.log('Time for main function: %d', Date.now())
//    next();
// })

// // App listening on the below port
// app.listen(PORT, function(err){
//    if (err) console.log(err);
//    console.log("Server listening on PORT", PORT);
// });


// // Will be called after the middleware
// app.get('/api', function (req, res) {
//     console.log('Time for middleware function: %d', Date.now())
//     res.send('Welcome to Tutorials Point')
//  })
 

// var express = require('express');
// var app = express();

// //Simple request time logger
// app.use("/akhil",function(req, res, next){
//    console.log("A new request received at " + Date.now());
//    console.log(next);
//    //This function call is very important. It tells that more processing is
//    //required for the current request and is in the next middleware
//    //function route handler.
//    next();
// });

// app.use('/akhil', function(req, res,next){
//    // res.send('i am bhargav');
//    console.log("i am first");
//     next();
//  });

// app.use('/akhil', function(req, res,next){
//    // res.send('i am akhil');
//    console.log("i am second");
//     next();
//  });

//  app.get('/akhil', function(req, res,next){
//     console.log("i am destination");
//     res.send('i am akhil');
//     next();
//  });

// app.use('/akhil', function(req, res,next){
//    // res.send('i am akhil');
//    console.log("i am third");
//     next();
//  });

// app.use('/akhil', function(req, res,next){
//   //  res.send('i am akhil');
//   console.log("i am fourth");
//     next();
//  });

// app.listen(3000);