import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [msg, setMsg] = useState<string[]>([])
  const [mymsg, setMymsg] = useState<string>("")

  useEffect(()=>{
    const socket = new WebSocket("ws://localhost:8080")
    socket.onopen = ()=>{
      console.log("connected")
      setSocket(socket)
    }
    socket.onmessage = (message)=>{
      console.log(message.data)
      setMsg((msg)=>[...msg, message.data as string])
    }

    return ()=>{
      socket.close()
    }
  },[])

  if(!socket){
    return <div>
      loading
    </div>
  }
  return (
    <div>
      <div>
        <input onChange={(e)=>setMymsg(e.target.value)} type="text" />
        <button onClick={()=>socket.send(mymsg)}>send</button>
      </div>
      {msg.map((m, i)=>{
        return <div key={i}>
          {m}
        </div>
      })}
    </div>
  )
}

export default App
