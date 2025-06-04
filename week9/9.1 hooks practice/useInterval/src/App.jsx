import { useEffect } from 'react'
import { useState } from 'react'

function useInterval(callback, sec){
  let interval;
  useEffect(()=>{
    interval = setInterval(callback, sec)
    return ()=>{
      clearInterval(interval)
    }
  }, [])

  
}

function App() {
  const [count, setCount] = useState(0);

  useInterval(()=>{
    setCount(c => c+1)
  },5000)

  return (
    <div>count: {count}</div>
  )
}

export default App
