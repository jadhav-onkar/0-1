const express = require("express");
const app = express();

const z = require("zod")


function authMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "ganesh" || password != "Ganesh@0230"){
        res.status(403).send("Wrong information")
    }
    next();
}

function checkKidney(req,res,next){
    const schema = z.number()
    const Kidneys = parseInt(req.query.Kidneys);
    let responce = schema.safeParse(Kidneys)
    if (!responce.success){
        res.send("plese provide numbers as input")
    }
    if (Kidneys > 2){
        res.status(403).send("person cannot have more than 2  kidneys")
    }
    next();
}

app.get("/health_check",authMiddleware,checkKidney, (req,res)=>{
    res.json({
        msg:"logged in succesfully",
        Kidneys: req.query.Kidneys,
       // responce 
    })
})

app.use((err,req,res,next)=>{
    res.send("something went wrong")
})

app.listen(3000);



// z.array(z.string())
// z.object({
//   email: z.string().email();
//   pass : z.string().min(8)    
// })