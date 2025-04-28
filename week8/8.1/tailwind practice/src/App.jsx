import { useState } from 'react'
import { Flex } from './Flex'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Flex />
    </div>
  )
}

export default App
