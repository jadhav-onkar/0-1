import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function App() {
  const [salary , setSalary] = useState(2000);
  const divRef = useRef();

  useEffect(()=>{
    setTimeout(()=>{
      divRef.current.innerHTML = 20;
    },5000)
  },[])
  return (
    <div>
      my current salary is <div ref={divRef}>{salary}</div>
    </div>
  )
}

export default App
