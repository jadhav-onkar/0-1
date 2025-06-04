import { useEffect, useState } from 'react'

function useIsOnline(){
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
      // setIsOnline(window.navigator.onLine)
      window.addEventListener('online', ()=>{
        setIsOnline(true)
      })
      window.addEventListener('offline', ()=>{
        setIsOnline(false)
      })

  return isOnline;
}

function useMousePosition(){
  const [positions, setPositions] = useState({x:0, y:0});

  window.addEventListener('mousemove', (e)=>{
    setPositions({x:e.clientX, y:e.clientY})
  })
  return positions
}

function useWidthHeight(){
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    })

    return ()=>{
      window.removeEventListener('resize', ()=>{
         setHeight(window.innerHeight)
         setWidth(window.innerWidth)
      })
    }
  },[])

  return {height, width}
}

function App() {
  const isOnline = useIsOnline()
  const positions = useMousePosition()
  const {height, width} = useWidthHeight()
  return (
    <div>
      {isOnline ? <div>user is online</div> : <div>user is offline</div>}
      <div>Mouse Positions:: {positions.x} {positions.y}</div>
      <div>width: {width}</div>
      <div>Height: {height}</div>
    </div>
  )
   
}

export default App
