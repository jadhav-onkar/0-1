

import express from "express";
import { User } from "./db";

const app = express()
app.use(express.json())

app.post('/user',async (req,res)=>{
    const body = req.body
    const user =await User.create({
        name:body.name,
        email:body.email,
        password:body.password
    })

    res.json({
        user,
        msg:"user created"
    })
})

app.get('/user',async (req,res)=>{
    const users =await User.find({})
    res.json({
        users
    })
})

app.get('/',(req,res)=>{
    res.send("hi there from backend")
})

app.listen(3000,()=>{
    console.log("app is listen on port 3000")
})