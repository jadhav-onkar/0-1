import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { ClipLoader } from "react-spinners";


function useTodos(sec){
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    let interval
    let timeout
    function fetchTodos(){
      axios.get('http://localhost:3000/todos').then((res)=>{
        setTodos(res.data.todos)
        setLoading(false)
      })
    }

    if(!sec || sec<=0){
        timeout = setTimeout(()=>{
        alert("you cannot set seconds to 0 or null")
      }, 3000)
    }
    else{
      fetchTodos()
      interval = setInterval(()=>{
        fetchTodos()
      },sec*1000)
    }

      return ()=>{
        clearInterval(interval)
        clearTimeout(timeout)
      }

  },[sec])

  return {todos, loading}
}

function App() {
  const [sec, setsec] = useState(2)
  const {todos, loading} = useTodos(sec)

  console.log(sec)
  if(loading){
    return <div >
      <ClipLoader
        color={'#000000'}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  }

  return (
    <div>
      <input onChange={ e=> setsec(e.target.value) } type="number" placeholder='enter seconds' value={sec}/>
      {todos.map((todo)=>{
        return(
        <div key={todo.id}>
          <div>{todo.title}</div>
        </div>
        )
      })}
    </div>
      
  )
}

export default App
