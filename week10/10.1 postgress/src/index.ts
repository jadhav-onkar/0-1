import { Client } from "pg";

// create client
const client = new Client({
    connectionString:"postgresql://neondb_owner:npg_7jIcRknSNWg8@ep-wandering-bar-a8vmqr02-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
})


// function to create user table   // use double quotes for user because it is reservers keyword
async function CreateUserTable(){
    await client.connect()
    const usertable = await client.query(`
            CREATE TABLE "user"(
                user_id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE,
                password VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `)
    await client.end()
    console.log("table created succesfully")
}

// function to insert into user table
async function insrtDataintoUser(username:string, password:string){
    await client.connect()
    const insertQuery = `INSERT INTO "user" (username, password) VALUES ($1, $2)`
    const values:string[]  = [username, password]
    const inserted =await client.query(insertQuery, values)
    console.log("inserted succesfully")
    console.log(inserted)
}

// function to get all user data from user table
async function getData(){
    try{
        await client.connect();
        const getQuery = `SELECT * FROM "user"`
        const data = await client.query(getQuery);
        if(data.rows.length > 0){
            console.log(data.rows)
        }
        else{
            console.log("records not found")
        }
    }
    catch(e){
        console.log(e , "something went wrong")
    }
}

// function to get data based on username
async function getDataOnUsername(username:string){
    try{
        await client.connect();
        const getQuery = `
            SELECT * FROM "user" WHERE username = $1
            `
        const data = await client.query(getQuery, [username]) 
        if (data.rows.length > 0){
            console.log(data.rows)
        }
        else{
            console.log("user not found")
        }
    }
    catch(e){
        console.log(e , "something went wrong")
    }
}


// function to create address table
async function createAddressTable(){
    await client.connect()
    try{
        const addressTable = await client.query(`
                CREATE TABLE address(
                    address_id SERIAL PRIMARY KEY,
                    user_id INTEGER NOT NULL,
                    city VARCHAR(100) NOT NULL,
                    state VARCHAR(100) NOT NULL,
                    contry VARCHAR(100) NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (user_id) REFERENCES "user"(user_id)
                )
            `)
        console.log(addressTable)
        console.log("table created succesfully")
    }
    catch(e){
        console.log(e, "error found")
    }
}

// function to insert data into address table
async function insertIntoAddress(userID:number, city:string, state:string, contry:string){
    await client.connect()
    try{
        const insertQuery = `
            INSERT INTO address (user_id, city, state, contry) VALUES ($1, $2, $3, $4)
        `
        const values = [userID, city, state, contry]
        const insertData = await client.query(insertQuery, values)
        console.log("data inserted succesfully")
    }
    catch(e){
        console.log(e, "error found")
    }
}
// insertIntoAddress(2,"Pune","Maharashtra","India") // throws an error
// insertIntoAddress(1,"Pune","Maharashtra","India")


// function to join two tables and retrive user and address data
async function getFromUserAddress(userID:number) {
    await client.connect()
    try{
        const getQuery = `
            SELECT u.user_id, u.username, a.address_id, a.city, a.state, a.contry 
            FROM "user" u JOIN address a ON u.user_id = a.user_id 
            WHERE u.user_id = $1
        `
        const getData = await client.query(getQuery, [userID])
        if (getData.rows.length > 0){
            console.log(getData.rows)
        }
        else {
            console.log("No address found for the given user ID.");
            return [];
        }
    }
    catch(e){
        console.log(e, "error found :: may user with id do not mention address")
    }
}

getFromUserAddress(7)

