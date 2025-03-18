import { useState } from 'react'
import './App.css'
import { CreatTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "go to gym at 8AM",
      completed: false
    }
  ])

  return (
      <div>
        <CreatTodo />
        <Todo todos={todos}/>
       </div>
  )
}

export default App
