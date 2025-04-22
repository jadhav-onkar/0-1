import { useState } from 'react'
import { RecoilRoot } from "recoil"
import { RenderTodos } from './Components/Todo'
import { InputBoxes } from './Components/Input'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RecoilRoot>
        <InputBoxes />
        <RenderTodos />
      </RecoilRoot>
    </div>
  )
}

export default App
