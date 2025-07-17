import { Client } from "pg";
import dotenv from 'dotenv'
dotenv.config()

const client = new Client({
    connectionString: process.env.DB_URL
})

client.connect().then(()=>{
    console.log("db connected")
}).catch(e=>console.log("dit not conect",e))

async function CreateUserTable() {
    const users = await client.query(`
            CREATE TABLE users(
                id SERIAL NOT NULL PRIMARY KEY,
                username VARCHAR(50) NOT NULL UNIQUE,
                gmail VARCHAR(50) NOT NULL UNIQUE,
                password VARCHAR(50)
            )
        `)
    console.log("user created succesfully")
}

async function CreateAddressTable() {
    const address = await client.query(`
            CREATE TABLE addresses(
                id SERIAL NOT NULL PRIMARY KEY,
                user_id INTEGER NOT NUll,
                city VARCHAR(50) NOT NULL,
                country VARCHAR(50) NOT NULL,
                pincode INTEGER NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `)
    console.log("address table created succesfully")
}

async function InsertUsers(username:string, gmail:string, password:string) {
    const user = await client.query(`
            INSERT INTO users (username, gmail,password) VALUES ($1,$2,$3)
        `,[username,gmail,password])
    console.log("user added scuccesfully")
}

async function InsertAddresses(id:number, city:string, country:string, pincode:number) {
    const address = await client.query(`
            INSERT INTO addresses (user_id, city,country,pincode) VALUES ($1,$2,$3,$4)
        `,[id,city,country,pincode])
    console.log("address added scuccesfully")
}


// give address and user info of user with username ganesh

const getUserAddressInfo = async (username:string)=>{
    const users = await client.query(`
         SELECT u.username, u.gmail, a.city, a.country, a.pincode from users u 
         JOIN addresses a ON u.id = a.user_id 
         WHERE u.username = $1
        `,[username])

        console.log(users.rows)
}

interface User{
    username:string;
    gmail:string;
    password:string;
}

interface Address{
    city:string;
    country:string;
    pincode:number
}

async function transactions(user:User, address:Address){

    try{
        await client.query(`BEGIN`)
    
        const inserted_user = await client.query(`
                INSERT INTO users (username, gmail, password) VALUES ($1,$2,$3)
            `,[user.username, user.gmail, user.password])
        
        const currentUser = await client.query(`
                SELECT id from users WHERE username = $1
            `,[user.username])
    
        const userId = currentUser.rows[0].id
    
        await client.query(`
                INSERT INTO addresses (user_id, city, country, pincode) VALUES ($1,$2,$3,$4)
            `,[userId, address.city, address.country, address.pincode])

        console.log("user created succesfully")
        const end = await client.query(`COMMIT`)
        console.log(end.command)

    }
    catch(e){
        const end = await client.query('COMMIT')
        console.log(end.command)
    }

}

transactions({
    username:"amey",
    gmail:"amey@gmail.com",
    password:"amey123"
},
{
    city:"banglore",
    country:"india",
    pincode:411006
})

 
