import { useEffect } from "react"
import { useState } from "react"

let count = 0
function App() {
  const [todos, setTodos] = useState()

  useEffect(()=>{
    const fechtodos = ()=>{
      fetch("https://dummyjson.com/todos").then(async (res)=>{
        const json = await res.json()
        setTodos(json.todos[count])
        count++
        console.log(count)
      })
    }
    fechtodos()
    const interval = setInterval(fechtodos, 3000)
    return () => clearInterval(interval)
     
    
    // useEffect runs when count changes
  },[])

  return (
    <div>
      {todos ?(
        <div>
        <h3>ID: {todos.id}</h3>
        <p>Task: {todos.todo}</p>
        <p>Status: {todos.completed ? "✅ Completed" : "❌ Not Completed"}</p>
        </div>
      ): (
        <p>process...</p>
      )}
    </div>
      

          
  )
  
}

export default App
