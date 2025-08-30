
import express from 'express';
import { createClient } from 'redis';

const app = express()
app.use(express.json())

const client = createClient()

app.post("/submit", async (req,res)=>{
    const { userId, code, problemid, language } = req.body;
    try{
        await client.lPush("problem", JSON.stringify({userId, code, problemid, language}))
        res.send("push in queue")
    }
    catch(e){
        res.send(e)
    }
})

async function startServer(){
    await client.connect();
    console.log("connect to redis DB")

    app.listen(3000, ()=>{
        console.log("app is listen on port 3000")
    })
}
startServer()