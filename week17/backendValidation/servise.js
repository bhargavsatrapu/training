
let express = require("express");

let app = express();

app.use(express.json());

app.listen(8000, () => {
    console.log("surver running at :" + 8000);
})

let db = {
    userdata: []
}

//if(!validator.isEmail(email))

app.post("/userdata", (req, res) => {

    let email = "jaira.j@gmail.com";
    let age="443";

    if (!email.includes("@")||email.indexOf("@") != email.lastIndexOf("@")) {
        res.send({
            "messsage": "enter proper email 1"
        })
    } else {
        let userName = email.slice(0, email.indexOf("@"));
        let domainName = email.slice(email.indexOf("@") + 1);
        if (userName.length < 4) {
            res.send({
                "messsage": "enter proper email 2"
            })
        } else if (domainName.includes(".")) {
            if (domainName.indexOf(".") != domainName.lastIndexOf(".")) {
                res.send({
                    "messsage": "enter proper email 3"
                })
            } else {
                let dominePrefix = domainName.slice(0, domainName.indexOf("."));
                let domineSuffixe = domainName.slice(domainName.indexOf(".") + 1);
                    if(dominePrefix.length<4){
                        res.send({
                            "messsage": "enter proper email 5"
                        })
                    }else if(domineSuffixe.length<2){
                        res.send({
                            "messsage": "enter proper email 6"
                        })
                    }else{
                        res.send({
                            "messsage": "successs full"
                        })
                    }
            }
        }else{
            res.send({
                "messsage": "enter proper email 4"
            })
        }
    }


    // if(isNaN(parseInt(age))){
    //     res.send({
    //         "messsage": "enter proper age number"
    //     })
    // }else if(parseInt(age)>130){
    //     res.send({
    //         "messsage": "age under 120"
    //     })
    // }
})

