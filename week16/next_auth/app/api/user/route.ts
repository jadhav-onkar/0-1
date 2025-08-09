import { Provider } from "@/app/lib/provider";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(){
    const session = await getServerSession(Provider)
    return NextResponse.json({
        session
    })
}