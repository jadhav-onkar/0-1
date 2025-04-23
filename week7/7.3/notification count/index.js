
import express from 'express'
const app = express()

app.get("/notification", (req,res)=>{
    const data = {
        network: Math.floor(Math.random()*50),
        message: Math.floor(Math.random()*80),
        jobs: Math.floor(Math.random()*140),
        notification: Math.floor(Math.random()*40)
    }

    res.status(200).json(data)
})

app.listen(3000)