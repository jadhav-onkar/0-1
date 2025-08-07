import { useState } from 'react'
import './App.css'
import sxios from 'axios'
import axios from 'axios'

interface userschema{
  id?:number;
  username:string;
  password:string;
}

function App() {
  const [user, setUser] = useState<userschema>({
    username:"",
    password:""
  })

  const signin =async ()=>{
    await axios.post('http://localhost:3000/signin',{
      username:user?.username,
      password:user?.password
    },{
      withCredentials:true
    })
    alert("signed in succesfully")
  }

  const signout =async ()=>{
    await axios.post('http://localhost:3000/logout',{
    },{
      withCredentials:true
    })
    alert("signed out")
  }


  return (
    <div>
      <input type="text" onChange={(e)=>setUser(u=>({...u,username:e.target.value}))} placeholder='username' />
      <input type="text" onChange={(e)=>setUser(u =>({...u,password:e.target.value}))} placeholder='password' />
      <button onClick={signin} name='submit'>submit</button>
      <button onClick={signout} name='logout'>logout</button>
    </div>
  )
}

export default App
