import { useState } from 'react'
import './App.css'
import { CreatTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [completed, setCompleted] = useState(false)

// wrong way to access from backend 
//  fetch("http://localhost:3000/todos").then((res)=>{
//     res.json().then((res)=>{
//       console.log(res)
//       setTodos(res.todos)
//     })
//   })

  return (
      <div>
        <CreatTodo todos={todos} title={title} description={description} completed={completed} setTitle={setTitle} setDescription={setDescription}/>
        <Todo todos={todos} setTodos={setTodos} />
       </div>
  )
}

export default App
