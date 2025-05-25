import React,  { useEffect, useState } from 'react'


function App() {
  const [render, setRender] = useState(true)
  useEffect(()=>{
    setInterval(()=>{
      setRender(r => !r)
  }, 5000)
  },[])
  
  return (
    <div>
      {render ? <MyComponent /> : <div>nothing</div>}
    </div>
  )
}

// function MyComponent(){
//     const [count, setCount] = useState(0)

//     return(
//       <div>
//         <button onClick={()=> setCount(count+1)}>Count {count}</button>
//       </div>
//     )
// }

// function MyComponent(){
//     useEffect(()=>{
//       console.log("on component mount")

//       return ()=>{
//         console.log("on component unmount")
//       }
//     },[])

//     return(
//       <div>
//         hi from my component
//       </div>
//     )
// }


class MyComponent extends React.Component{
  componentDidMount(){
    console.log("component is mounted")
  }

  componentWillUnmount(){
    console.log("component will unmount")
  }
  render(){
    return <div>Hi there</div>
  }
}

export default App
