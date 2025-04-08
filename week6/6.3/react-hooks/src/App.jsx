import { useEffect, useState } from 'react'


function App() {
  const [income, setIncome] = useState({})
  const [Return, setReturn] = useState({})

  console.log("rendered...")
  useEffect(()=>{
    console.log(" first effect rendered..")
    setTimeout(()=>{
      setIncome({"income": 100})
    },3000)

    setTimeout(()=>{
      setReturn({"return": 100})
    },1000)
  },[])


  const incomeTax = (income.income + Return.return)*0.3 
  return (
    <div>
      {incomeTax}
    </div>
  )
}

export default App
