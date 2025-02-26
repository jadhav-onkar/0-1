const { log } = require("console");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin01:Admin0230@cluster0.iwsu4.mongodb.net/Users").then(()=>{
    console.log("connected")
}).catch((err)=>{console.log("failed to connect")});

const Users = mongoose.model("user", {
    gmail: {type: String, unique:true, required:true},
    password: {type:String, required:true}
})
let user = ""
let p = Users.findOne({gmail: "sakshi@08"}).then((responce)=>{
    if (!responce){
        console.log("wrong")
    }
    else{
        console.log("right")
    }
})


   


