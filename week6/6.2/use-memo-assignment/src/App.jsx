import { useMemo } from 'react'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)

  let sum = useMemo(()=>{
    let total = 0
    console.log("memo called....")
    for(let i=1; i<=num; i++){
      total = total + i
    }
    return total
  },[num])
  
  

  return (
    <div>
      <input type="text" placeholder='number' onChange={(n)=> setNum(n.target.value)}/>
      <p>Sum is {sum}</p>
      <button onClick={()=> setCount(count+1)}>counter: {count}</button>
    </div>
  )
}

export default App
