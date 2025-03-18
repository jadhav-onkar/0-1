import { useState } from 'react'
import './App.css'
import { CreatTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <CreatTodo />
        <Todo />
       </div>
  )
}

export default App
