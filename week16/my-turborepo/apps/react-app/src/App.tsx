import { useState } from 'react'
import './App.css'
import { Button } from "@repo/ui/button"
import { DB_URL } from "@repo/common/index"

function App() {
  console.log(DB_URL)
  return (
    <div>
      <Button />
      <div>hi from react app <br /> {DB_URL}</div>
    </div>
  )
}

export default App
