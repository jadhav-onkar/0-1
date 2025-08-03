
import mongoose from "mongoose";

mongoose.connect( process.env.DB_URL || "mongodb://mymongo:27017/course").then(()=>{
    console.log("db connected succesfully")
}).catch(e=>{
    console.log("error while connecting")
})

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String
})

export const User = mongoose.model('User',userSchema)
