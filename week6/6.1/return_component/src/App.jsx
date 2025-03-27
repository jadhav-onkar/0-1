import React, { useState } from 'react'


function App() {

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
  <React.Fragment>
    <Header title={"hi there"} />
    <Header title={"good morning"} />
  </React.Fragment>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
