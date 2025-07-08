import { z } from 'zod'
import express from 'express'
const app = express()


app.use(express.json())
const userSchema = z.object({
    name:z.string().min(1),
    email:z.string().email(),
    password:z.string().min(6),
    age:z.number()
})

type User = z.infer<typeof userSchema>

app.post("/",(req,res)=>{
    const userdata:User = req.body;
    const { success } = userSchema.safeParse(userdata);

    if(!success){
        res.send("wrong inputs")
    }
    res.json(userdata)
})

app.listen(8080, ()=>{
    console.log("server is listen on port 8080")
})