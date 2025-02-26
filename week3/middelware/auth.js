const express = require("express")
const app = express()

app.get("/health_checks", (req,res)=>{
    const kidneys = req.query.kidneys;
    const username = req.header.username;
    const password = req.headers.password;
    if (username != "ganesh" && password != "Ganesh@0230"){
        res.status(400).json({
            msg:"somthing wrong with username and pass"
        })
    }
    if (kidneys > 2){
        res.status(400).json({
            msg:"somthing wrong with your kidneys"
        })
    }

    res.json({
        msg: "your kidneys are fine"
    })
})

app.listen(3000)