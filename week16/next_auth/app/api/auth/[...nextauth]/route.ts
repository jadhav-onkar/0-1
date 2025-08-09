import { NextRequest, NextResponse } from "next/server";
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name:'Email',
            credentials:{
                username: {label:"email", placeholder:"xyz@gmail.com",type:"text"},
                password: {label:"password", placeholder:"password",type:"password"},
            },
            async authorize(credentials,req){
                console.log(credentials?.username)
                console.log(credentials?.password)
                return {id: "1"}
            }
        })
    ]
})

export { handler as GET, handler as POST };



// export async function GET(req:NextRequest, { params }: any){
//     const { nextauth } = await params
//     console.log(nextauth)
//     return new NextResponse("cjshj")
// }