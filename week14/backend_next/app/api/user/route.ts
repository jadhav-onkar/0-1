import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";


const client = new PrismaClient()

export function GET(){
    return Response.json({
        name:"ganesh",
        email:"ganesh@gmail.com"
    })
}

export async function POST(req:NextRequest){
    const body = await req.json();
    const user = await client.user.create({
        data:{
            email:body.username,
            password:body.password
        }
    })

    return Response.json({
        user,
        msg:"you are signed in succesfully"
    })
}   