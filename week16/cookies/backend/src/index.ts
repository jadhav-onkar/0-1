
import express from "express"
import cors from "cors"
import jwt, { JwtPayload } from 'jsonwebtoken'
import cookieParser  from 'cookie-parser'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}))

app.post('/signin',async (req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const token =await jwt.sign({id:1}, process.env.JWT_SECRETE || "")
    res.cookie('token',token)
    res.send("you are signed in succesfully")
})

app.get('/user',async (req,res)=>{
    const cookie = req.cookies.token
    const decoded = await jwt.verify(cookie, process.env.JWT_SECRETE || "") as JwtPayload

    res.json({
        userid: decoded.id
    })
})

app.post('/logout',(req,res)=>{
    res.clearCookie("token")
    res.send("logged out succesfully")
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../src/index.html'))
})
app.listen(3000,()=>{
    console.log("app is listen on port 3000")
})
