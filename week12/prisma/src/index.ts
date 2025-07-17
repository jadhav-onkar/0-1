
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const insertIntoUsers =async (username:string, password:string)=>{
    const user = await prisma.users.create({
        data:{
            username,
            password
        }
    })
    console.log(user)
}

const insertIntoTodos =async (userId:number, title:string, description:string)=>{
    const Todo = await prisma.todos.create({
        data:{   
            userId,
            title,
            description
        }
    })
    console.log(Todo)
}

// get todos and username of specific user
const getTodos = async (userId: number)=>{
    const res = await prisma.todos.findMany({
        where:{
            userId
        },
        select:{
            id:true,
            title:true,
            description:true,
            user:{
                select:{
                    username:true
                }
            }
        }
    })
    console.log(res)
}

const updateTodo =async (todoId:number,title:string, description:string)=>{
    const update = await prisma.todos.update({
        where:{
            id:todoId
        },
        data:{
            title,
            description
        }
    })
    console.log(update)
}

updateTodo(10,"new title", "description of new todo")

