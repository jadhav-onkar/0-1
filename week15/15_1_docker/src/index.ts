
import express from 'express'
import { PrismaClient } from '../node_modules/.prisma/client/index'

const app = express()
const client = new PrismaClient()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hi there ")
})

app.post("/blogs",async (req,res)=>{
    const body = req.body
    const blog = await client.blogs.create({
        data:{
            title:body.title,
            description:body.description
        }
    })
    res.json({
        msg:"blog created",
        blog
    })
})

app.listen(3000,()=>{
    console.log("app is listning")
})

