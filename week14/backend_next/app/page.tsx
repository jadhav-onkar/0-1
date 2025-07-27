import Image from "next/image";
import axios from 'axios'

async function getUser(){
  await new Promise((res)=>setTimeout(res,1000))
    const user = await axios.get('http://localhost:3000/api/user')
    return(user.data)
  }

export default async function Home() {
  const user = await getUser()
  return (
  <div className="h-screen flex w-full justify-center items-center">
    <div className="p-2 border border-gray-400">
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  </div>
  );
}
