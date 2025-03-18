const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express()

app.use(express.json())

app.post("/todo", async (req,res)=>{
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);

    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "wrong inputs"
        })
        return
    }
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })

    res.status(200).json({
        msg: "todo creates succesfully"
    })
})

app.get("/todos", async (req,res)=>{
   const todos = await todo.find();
   res.status(200).json({
    todos
   })
})

app.put("/completed",async (req,res)=>{
    const updatePayLoad = req.body;
    const parseUpdatePayLoad = updateTodo.safeParse(updatePayLoad)

    if(!parseUpdatePayLoad.success){
        res.status(411).json({
            msg: "wrong inputs"
        })
        return
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })

    res.status(200).json({
        msg: "todo updates succesfully"
    })
})

app.listen(3000)