import { prisma } from '@/db'

async function getUser(){
    const user = await prisma.user.findFirst()
    console.log(user)
    return {email:user?.email, name:"ganesh"}
  }

export default async function Home() {
  const user = await getUser()
  return (
  <div className="h-screen flex w-full justify-center items-center">
    <div className="p-2 border border-gray-400">
      <div>{user?.email}</div>
      <div>{user?.name}</div>
    </div>
  </div>
  );
}
