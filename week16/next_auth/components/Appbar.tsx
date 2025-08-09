"use client"

import { signIn, signOut  } from 'next-auth/react'

export const Appbar = ()=>{
    return(
        <div>
            <button onClick={()=>signIn()}>Signin</button> <br />
            <button onClick={()=>signOut()}>logout</button>
        </div>
    )
}