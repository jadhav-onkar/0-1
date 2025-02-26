const express = require("express");
const app = express();

let st =  Date.now();

app.get("/",(req,res)=>{
    let et =  Date.now();
    let time = et - st;
    res.send(time.toString())
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})