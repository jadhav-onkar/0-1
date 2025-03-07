import { useState } from "react";

function App() {

  const [ count, setCount ] = useState(0);
  
  return (
    <CustomButton count = {count} setCount = {setCount}/> // react use 
  )

}

function CustomButton(props){

  function updateCount(){
    props.setCount(props.count + 1);
  }
  return <button onClick={updateCount}>
    Counter {props.count}
  </button>
}

export default App
