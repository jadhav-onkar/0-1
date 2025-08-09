import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

export const Provider = {
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
                return {id: "1",
                        email:credentials?.username,
                        password:credentials?.password,
                        name:"ganesh",
                        lname:"jadhav"
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
  })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        async jwt({user,token}:any){
            if(user){
                token.id = user.id
                token.lname = user.lname
                token.password = user.password
            }
            return token
        },
        async session({session, token, user}:any){
            session.user.id = token.id
            session.user.lname = token.lname
            session.user.password = token.password
            return session
        }
    },
    pages:{
        signIn:"/signin"
    }
}