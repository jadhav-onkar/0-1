import React, { useState } from 'react'
const Dashboard = React.lazy(()=> import('./components/Dashboard')) 
const Landing = React.lazy(()=> import('./components/Landing')) 
// use React.lazy

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"

function App() {

  return (
    <div>
      {/* 
      it causes re-render
      instead useNavigate hook
  
      <button onClick={()=>{
        window.location.href = "/"
      }}>Landing</button>
      <button onClick={()=>{
        window.location.href = "/dashboard"
      }}>Dashboard</button> */  }


    <React.Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
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
