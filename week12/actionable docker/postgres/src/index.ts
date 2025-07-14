
import dotenv from 'dotenv';
import { Client } from 'pg';
dotenv.config()

const client = new Client({
    connectionString:process.env.DB_URL
})

client.connect()

type User = {
    username:string;
    email:string;
    password:string;
}
async function create_user_table(){
    const create =await client.query(`
            create table "user" (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE,
                email VARCHAR(50),
                password VARCHAR(20)
            )
        `)
    console.log("table created succesfully")
}

async function insertUser(user:User){
    const insert = await client.query(`insert into "user" 
        (username, email, password) values ($1,$2,$3)`,[user.username, user.email, user.password])
    console.log("data inserted")
}

async function getData(){
    const data = await client.query(`select * from "user"`)
    console.log(data.rows)
}

getData()



