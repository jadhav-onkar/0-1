const user = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}]

const express = require("express")
const app = express()
const port = 3000;

app.use(express.json())

app.get("/", (req,res) =>{
    let numOfKidneys = user[0].kidneys.length;
    let healthy_kidneys = 0;
    let  unhealthy_kidneys = 0;
    user[0].kidneys.map((i)=>{
        if (i.healthy){
            healthy_kidneys += 1;
        }
        else{
            unhealthy_kidneys += 1;
        }
    })
    res.json({
        numOfKidneys,
        healthy_kidneys,
        unhealthy_kidneys
    })
})

app.post("/", (req,res)=>{
    let addedKidney = req.body.addedKidney
    user[0].kidneys.push({healthy: addedKidney})

    res.send("done")
})

app.put("/", (req,res)=>{
    user[0].kidneys.map((i)=>{
        if (!i.healthy){
            i.healthy = true
        }
    })
    res.send("replaced")
})

app.delete("/", (req,res)=>{
    let new_arr = user[0].kidneys.filter((i)=>{
        return i.healthy
    })
    user[0].kidneys = new_arr;
    res.send("delete all kidneys")
})

app.listen(3000)