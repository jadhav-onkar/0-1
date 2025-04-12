import { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"

function App() {

  return (
    <div>
    {/* 
    it couses re-render
    instead useNavigate hook

    <button onClick={()=>{
      window.location.href = "/"
    }}>Landing</button>
    <button onClick={()=>{
      window.location.href = "/dashboard"
    }}>Dashboard</button> */  }


    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/' element={<Landing/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Navbar(){
  const navigate = useNavigate()
  return(
    <div>
      <button onClick={()=>{
        navigate("/")
      }}>Landing</button>
      <button onClick={()=>{
        navigate("/dashboard")
      }}>Dashboard</button>
    </div>
  )
}

export default App
