const express = require("express");
const app = express()

let count = 0;
function counter(req,res,next){
    count++;
    next()
}

app.use(counter);

app.get("/", (req,res)=>{
    res.send(count.toString()); // dont send numbers directly it will assume it as status code
})

app.listen(3000)