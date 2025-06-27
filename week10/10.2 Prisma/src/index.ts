
import  { PrismaClient, Prisma } from '../generated/prisma/client' 

const prisma = new PrismaClient();

interface userSchema{
    email: string;
    name: string;
    password: string;
}

// insert data into db
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

// update user from db
const updateUser = async(email:string, password:string)=>{
    try{
        const updateData = await prisma.user.update({
            where:{
                email
            },
            data:{
                password
            },
            select:{
                id:true,
                email:true,
                password:true
            }
        })
        console.log(updateData)
    }
    catch(e){
        console.log(e, "error found")
    }
}

// get user info from email
const getSpecificUser = async(email:string)=>{
    try{
        const data = await prisma.user.findUnique({
            where:{
                email
            },
            select:{
                id:true,
                email:true,
                password:true
            }
        })
        console.log(data ? data : "user not found")
    }
    catch(e){
        console.log(e, "error found")
    }
}

// get all users info
const getAllUsers = async()=>{
    try{
        const data = await prisma.user.findMany({
            orderBy:{
                id:'asc'
            }
        })
        console.log(data)
    }
    catch(e){
        console.log(e, "error found")
    }
}

// delete user by their email
const deleteOne = async(email:string)=>{
    try{
        const deleted = await prisma.user.delete({
            where:{
                email
            },
            select:{
                id:true,
                email:true
            }
        })
        console.log(deleted? deleted : "Data not found")
    }
    catch (e: unknown) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {    // how to catch error in prisma
        if (e.code === 'P2025') {
            console.log('No matching record found for deletion (P2025)');
        } else {
            console.log(`Prisma error ${e.code}:`, e.message);
        }
    } else {
        console.log('Unexpected error:', e);
    }
}
}

deleteOne("test@gmail.com")