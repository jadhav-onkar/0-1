const express = require("express");
const app = express();

function authMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "ganesh" || password != "Ganesh@0230"){
        res.status(403).send("Wrong information")
    }
    next();
}

function checkKidney(req,res,next){
    const Kidneys = req.query.Kidneys;
    if (Kidneys > 2){
        res.status(403).send("person does not have more than 2 kidneys")
    }
    next();
}

app.get("/health_check",authMiddleware,checkKidney, (req,res)=>{
    res.json({
        msg:"logged in succesfully",
        Kidneys: req.query.Kidneys
    })
    
})
app.listen(3000);