const express = require("express");
const app = express();

const z = require("zod")


function authMiddleware(req,res,next){
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    })
    const details = req.body;
    const response = schema.safeParse(details)

    if (!response.success){
        res.status(403).send("please provide valid information")
    }
    if (details.email != "ganeshjadhav7478@gmail.com" || details.password != "Ganesh@0230"){
        res.status(403).send("Wrong information")
    }
    next();
}

app.use(express.json());

app.post("/health_check",authMiddleware, (req,res)=>{
    const info = req.body
    res.json({
        msg:"logged in succesfully",
        info
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