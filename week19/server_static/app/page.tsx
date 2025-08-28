import { reval } from "@/lib/action/reval";
import next from "next";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/todos/random",{
    next:{
      tags: ["todos"]
    }
  })
  const todos = await res.json()
  reval()
  console.log("hi there")
  console.log(todos)
  

  return (
   <div>
     {JSON.stringify(todos)}
   </div>
  );
}
