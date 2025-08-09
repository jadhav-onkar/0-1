"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    return (
        <div>
            <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="username"/> <br />
            <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="password"/> <br />
            <button onClick={async ()=>{
                await signIn('credentials',{
                username,
                password,
                redirect:false
            })
            router.push('/')
            }}>submit</button> <br />
            <button onClick={()=>{signIn('google')}}>signin with google</button>
        </div>
    )
}