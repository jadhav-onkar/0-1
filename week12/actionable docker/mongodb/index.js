
import mongoose, { mongo } from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("BD connected")
}).catch(e=>console.log("error occured",e))

const USerSchema = new mongoose.Schema({
    username:{type:String,unique:true},
    email:{type:String,unique:true},
    password:{type:String,minLength:6}
})

const User = mongoose.model('User',USerSchema)

app.get('/',(req,res)=>{
    res.send("hi there")
})

app.post("/signup",async (req,res)=>{
    const userInfo = req.body
    console.log(userInfo)
    try{
        const user = await User.create(userInfo)
        res.status(200).json({
            msg:"User is created",
            user
        })
    }
    catch(e){
        res.status(404).json({
            msg:"somthing went wrong"
        })
    }
})

app.listen(3000,()=>{
    console.log("app is listen on port 3000")
})