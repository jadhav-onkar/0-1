const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express()

app.use(express.json())

app.post("/todo", (req,res)=>{
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);

    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "wrong inputs"
        })
        return
    }

})

app.get("/todos", (req,res)=>{
   
})

app.put("/completed", (req,res)=>{
    const updatePayLoad = req.body;
    const parseUpdatePayLoad = updateTodo.safeParse(updatePayLoad)

    if(!parseUpdatePayLoad.success){
        res.status(411).json({
            msg: "wrong inputs"
        })
        return
    }
})

app.listen(3000)