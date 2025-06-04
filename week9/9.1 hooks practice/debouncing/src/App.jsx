import { useEffect } from 'react';
import { useState } from 'react'

function useDebounce(userInput){
  const [input, setInput] = useState(userInput);

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setInput(userInput)
    }, 500);

    return ()=>{
      clearTimeout(timeout)
    }
  },[userInput])

  return input
}

function App() {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input)
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      flexDirection: 'column',
      padding: '300px'
    }}>
      <input type="text" onChange={(e)=>setInput(e.target.value)} />
      <div>{debouncedInput}</div>
   </div>
  )
}

export default App
