"use client"
import { SessionProvider } from "next-auth/react"

export const Sessionprovider = ({ children }:any)=>{
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}