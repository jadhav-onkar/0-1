import { NextRequest, NextResponse } from "next/server";

export function middleware(req:NextRequest){
    let user:string = "gnesh"
    if(req.nextUrl.pathname.startsWith('/api/user')){
            return NextResponse.next()
    }
    if (req.nextUrl.pathname.startsWith("/signin")) {
        return NextResponse.next();
    }
    if(req.nextUrl.pathname.startsWith('/dashboard')){
        if(user != "ganesh"){
            return NextResponse.redirect(new URL("/signin", req.url))
        }
        else{
            return NextResponse.next()
        }
    }
    return NextResponse.next()
}



// let reqCount = 0
// export function middleware(req:NextRequest){
//     reqCount += 1
//     console.log(reqCount)
//     return NextResponse.next()
// }

// export const config = {
//     matcher: "/api/user"
// }