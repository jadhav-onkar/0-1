
import express from "express";
import { DB_URL } from "@repo/common/index"

const app = express()
console.log(DB_URL)

app.get('/',(req,res)=>{
    res.send("hi there backend app i am onkar jadhav")
})

app.listen(5000,()=>{
    console.log("app is listen on port 5000")
})