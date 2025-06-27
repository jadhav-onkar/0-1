
import { PrismaClient } from '../generated/prisma/client' 

const prisma = new PrismaClient();

interface userSchema{
    email: string;
    name: string;
    password: string;
}

const insertIntoUser = async(userDetails:userSchema)=>{
    try{
        const res = await prisma.user.create({
            data:{
                email: userDetails.email,
                name: userDetails.name,
                password: userDetails.password
            },
            select:{
                id:true,
                email:true,
                name:true
            }
        })
        console.log(res)
    }
    catch(e){
        console.log(e, "error found")
    }
}

insertIntoUser({
    email: "vaibhav@gmail.com",
    name: "Vaibhav",
    password: "Vaibhav@0230"
})
