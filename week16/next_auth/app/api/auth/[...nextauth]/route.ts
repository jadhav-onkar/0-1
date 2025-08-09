import { NextRequest, NextResponse } from "next/server";
import NextAuth from 'next-auth'
import { Provider } from "@/app/lib/provider";

const handler = NextAuth(Provider)

export { handler as GET, handler as POST };



// export async function GET(req:NextRequest, { params }: any){
//     const { nextauth } = await params
//     console.log(nextauth)
//     return new NextResponse("cjshj")
// }