const express = require("express");
const mongoose = require("mongoose");

const app = express()
mongoose.connect("mongodb+srv://admin01:Admin0230@cluster0.iwsu4.mongodb.net/Users").then(()=>{
    console.log("connected")
}).catch((err)=>{console.log("failed to connect")});

const Users = mongoose.model("user", {
    gmail: {type: String, unique:true, required:true},
    password: {type:String, required:true}
})



app.use(express.json());

app.post("/",(req,res)=>{
    let gmail = req.body.gmail;
    let password = req.body.password;

    const user = new Users({
        gmail: gmail,
        password: password
    })
    user.save()
    res.status(201).send("info stored succesfully")
})

app.get("/",async (req,res)=>{
    try{
        let gmail = req.headers.gmail;
        console.log(gmail)
        let user = await Users.findOne({gmail: gmail})
        
        if(gmail != user.gmail){
            res.status(403).json({
                msg:"user not found"
            })
        }
        let data = await Users.find({})
        res.status(200).json({
            data
        })
    }
    catch(err){
        res.status(400).send(err)
    }
    
})


app.listen(3000, ()=>{
    console.log("server is started")
})