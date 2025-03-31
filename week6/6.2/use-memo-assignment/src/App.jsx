import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)

  function calculateSum(n){
    let sum = 0
    for(let i=1; i<=n; i++){
      sum = sum + i
    }
    return sum
  }
  console.log(num)

  return (
    <div>
      <input type="text" placeholder='number' onChange={(n)=> setNum(n.target.value)}/>
      <p>Sum is {calculateSum(num)}</p>
      <button onClick={()=> setCount(count+1)}>counter: {count}</button>
    </div>
  )
}

export default App
