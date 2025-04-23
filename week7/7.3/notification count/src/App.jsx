import { useEffect, useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { notificationCount } from './strore/Atoms/notification'
import axios from 'axios'
import { totalSum } from './strore/selectors/total'

function App() {
  return(
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp(){
  const [notification, setNotificationCount] = useRecoilState(notificationCount)
  const total = useRecoilValue(totalSum)

  useEffect(()=>{
    axios.get('http://localhost:3000/notification').then((res)=>{
      setNotificationCount(res.data)
    })
  },[])

  console.log(notification)
  return (
    <>
     <button>Home</button>

     <button>Network ({notification.network})</button>
     <button>Messages ({notification.message})</button>
     <button>Jobs ({notification.jobs})</button>
     <button>Notifications ({notification.notification})</button>

     <button>Profile ({total})</button>
    </>
  )
}
export default App
