import { Client } from "pg";
import dotenv from 'dotenv';
dotenv.config()

const client = new Client({
    connectionString:process.env.DB_URL
})

client.connect().then(()=>{
    console.log("connected")
})