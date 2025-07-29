import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/db'



export async function GET(){
    const user = await prisma.user.findFirst()
    return NextResponse.json({
        name:"ganesh",
        email: user?.email
    })
}

export async function POST(req:NextRequest){
    const body = await req.json();
    console.log(body)
    try{
        const user = await prisma.user.create({
            data:{
                email:body.username,
                password:body.password
            }
        })
    
        return NextResponse.json({
            user,
            msg:"you are signed in succesfully"
        })
    }
    catch(e){
        return NextResponse.json({
            e,
            msg:"something went wrong"
        },{
            status:401
        })
    }
}   