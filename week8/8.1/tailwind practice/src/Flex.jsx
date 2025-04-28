
export function Flex(){
    return(
    // without tailwind
    <>
    <div style={{display:'flex', justifyContent:"space-evenly"}}>
      <div style={{backgroundColor:"red"}}>This is div</div>
      <div style={{backgroundColor:"green"}}>This is div</div>
      <div style={{backgroundColor:"yellow"}}>This is div</div>
    </div>

    {/* with tailwind */}
    <div className="flex justify-between">
        <div className="bg-red-500">This is div</div>
        <div className="bg-green-500">This is div</div>
        <div className="bg-yellow-400">This is div</div>
    </div>
    </>
    )
}