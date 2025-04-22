import { useState } from 'react'
import { RecoilRoot } from "recoil"
import { RenderTodos } from './Components/Todo'
import { InputBoxes } from './Components/Input'
import { Filter } from './Components/Filter' 


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RecoilRoot>
        <InputBoxes />
        <Filter />
        <RenderTodos />
      </RecoilRoot>
    </div>
  )
}

export default App
