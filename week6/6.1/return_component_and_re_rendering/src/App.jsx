import React, { useState } from 'react'


function App() {

  const [title, setTitle] = useState("hi there")
  
  return (
    // you cannot do this
    // <Header title={"hi there"} />
    // <Header title={"good morning"} />


    // you can do this
    // <div>
    //   <Header title={"hi there"} />
    //   <Header title={"good morning"} />
    // </div>

    // you can do this
    // <>
    //     <Header title={"hi there"} />
    //     <Header title={"good morning"} />
    //   </>

    // you can do this
  <div>
    {/* <HeaderWithButton/> */}

    <button onClick={()=>{
        setTitle("random number" + Math.random())
      }}>Click hear to change title</button>
    <Header title={title}/>
    <Header title={"good morning"} />
    <Header title={"good morning"} />
    <Header title={"good morning"} />
    <Header title={"good morning"} />

  </div>
  )
}

const Header = React.memo(function Headers({title}){
  return <div>
    {title}
  </div>
})


// push state down in component so that only that component re renders
// function HeaderWithButton(){
//   const [title, setTitle] = useState("hi there")
//   return(
//     <div>
//       <button onClick={()=>{
//         setTitle("random number" + Math.random())
//       }}>Click hear to change title</button>
//       <Header title={title}/>
//     </div>
//   )
// }
export default App
