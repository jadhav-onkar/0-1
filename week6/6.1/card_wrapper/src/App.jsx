

function App() {

  return (
    // <CardWrapper InnerComponent={<TextComponent/>}/>
    <div>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>

      <CardWrapper>hi there</CardWrapper>
    </div>

  )
}

function TextComponent(){
  return <div>
    <h1>My name is ganesh</h1>
    <h2>college name: PESMCOE</h2>
  </div>

}

// function CardWrapper({InnerComponent}){
//   return(
//     <div style={{
//       color: "red",
//       border: "2px solid black"
//     }}>
//       {InnerComponent}
//     </div>
// )
// }

  function CardWrapper({children}){
    return(
    <div style={{border: "2px solid black", color: "red", padding:10, margin:10 }}>
      {children}
    </div>
    )
  }

export default App
