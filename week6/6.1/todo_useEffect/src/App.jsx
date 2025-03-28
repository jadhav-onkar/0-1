import { useEffect } from "react"
import { useState } from "react"

function App() {
  const [todos, setTodos] = useState()
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const fechtodos = ()=>{
      fetch("https://dummyjson.com/todos").then(async (res)=>{
        const json = await res.json()
        setCount(count + 1)
        setTodos(json.todos[count])
        console.log(count)
      })
    }
    fechtodos()
    setInterval(fechtodos, 3000)
    // useEffect runs when count changes
  },[])

  return (
    <div>
      {JSON.stringify(todos)}
    </div>
  )
}

export default App
