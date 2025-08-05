
import express from "express";

const app = express()

app.get('/',(req,res)=>{
    res.send("hi there backend app i am onkar jadhav")
})

app.listen(5000,()=>{
    console.log("app is listen on port 5000")
})