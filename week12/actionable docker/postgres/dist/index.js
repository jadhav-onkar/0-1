"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const client = new pg_1.Client({
    connectionString: process.env.DB_URL
});
client.connect();
async function create_user_table() {
    const create = await client.query(`
            create table "user" (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE,
                email VARCHAR(50),
                password VARCHAR(20)
            )
        `);
    console.log("table created succesfully");
}
async function insertUser(user) {
    const insert = await client.query(`insert into "user" 
        (username, email, password) values ($1,$2,$3)`, [user.username, user.email, user.password]);
    console.log("data inserted");
}
async function getData() {
    const data = await client.query(`select * from "user"`);
    console.log(data.rows);
}
getData();
