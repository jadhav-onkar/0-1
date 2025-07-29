"use server"
import { prisma } from "@/db"

export async function signup(email:string, password:string){
        try{
            const user = await prisma.user.create({
                data:{
                    email,
                    password
                }
            })
            return "done"
        }
        catch(e){
           return "error"
        }
}