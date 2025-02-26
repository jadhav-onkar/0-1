const express = require("express");
const jwt = require("jsonwebtoken");
const app = express()
const jwtPass = "123456"

let users = [
    {
        gmail:"ganesh0230@gmail.com",
        password: 123,
        username: "Ganesh"
    },
    {
        gmail:"rohit@0230",
        password: 123456,
        username: "Rohit"
    },
    {
        gmail:"amey@123",
        password: 1569,
        username: "Amey"
    }
]
function checkUser(gmail,password){
    let isPresent = false
    for(let i = 0; i<users.length; i++){
        if(users[i].gmail == gmail && users[i].password == password){
            isPresent = true
        }
    }
    return isPresent;
}
app.use(express.json());

app.post("/signin", (req,res)=>{
    let gmail = req.body.gmail;
    let password = req.body.password;

    if (!checkUser(gmail,password)){
        res.status(403).json({
            msg:"user not found in dataset"
        })
    }

    let token = jwt.sign({gmail: gmail}, jwtPass);
    res.json({
        token
    })
})

app.get("/login", (req,res)=>{
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPass);
    const gmail = decoded.gmail;

    let user = users.filter((i)=>{
        if (i.gmail == gmail){
            return false
        }
        return true;
    })
    res.json({
        gmail,
        user
    })

})

app.listen(3000)
