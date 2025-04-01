import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'

function App() {

  function useTodos(){
    const [todos, setTodos] = useState([])
    useEffect(()=>{
      axios.get("https://dummyjson.com/todos").then(res=>{
        setTodos(res.data.todos)
      })
    },[])
    return todos
  }

  let todos = useTodos()
  return (
    <>
      {todos.map(todo=>{
        return <div key={todo.id}>
          <h1>{todo.id}  {todo.todo}</h1>
        </div>
      })}
    </>
  )
}


export default App
