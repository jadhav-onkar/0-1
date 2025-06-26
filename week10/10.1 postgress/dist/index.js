"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:npg_7jIcRknSNWg8@ep-wandering-bar-a8vmqr02-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
});
function CreateUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const usertable = yield client.query(`
            CREATE TABLE "user"(
                user_id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE,
                password VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        yield client.end();
        console.log("table created succesfully");
    });
}
function insrtDataintoUser(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const insertQuery = `INSERT INTO "user" (username, password) VALUES ($1, $2)`;
        const values = [username, password];
        const inserted = yield client.query(insertQuery, values);
        console.log("inserted succesfully");
        console.log(inserted);
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const getQuery = `SELECT * FROM "user"`;
            const data = yield client.query(getQuery);
            if (data.rows.length > 0) {
                console.log(data.rows);
            }
            else {
                console.log("records not found");
            }
        }
        catch (e) {
            console.log(e, "something went wrong");
        }
    });
}
function getDataOnUsername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const getQuery = `
            SELECT * FROM "user" WHERE username = $1
            `;
            const data = yield client.query(getQuery, [username]);
            if (data.rows.length > 0) {
                console.log(data.rows);
            }
            else {
                console.log("user not found");
            }
        }
        catch (e) {
            console.log(e, "something went wrong");
        }
    });
}
function createAddressTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const addressTable = yield client.query(`
                CREATE TABLE address(
                    address_id SERIAL PRIMARY KEY,
                    user_id INTEGER NOT NULL,
                    city VARCHAR(100) NOT NULL,
                    state VARCHAR(100) NOT NULL,
                    contry VARCHAR(100) NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (user_id) REFERENCES "user"(user_id)
                )
            `);
            console.log(addressTable);
            console.log("table created succesfully");
        }
        catch (e) {
            console.log(e, "error found");
        }
    });
}
function insertIntoAddress(userID, city, state, contry) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const insertQuery = `
            INSERT INTO address (user_id, city, state, contry) VALUES ($1, $2, $3, $4)
        `;
            const values = [userID, city, state, contry];
            const insertData = yield client.query(insertQuery, values);
            console.log("data inserted succesfully");
        }
        catch (e) {
            console.log(e, "error found");
        }
    });
}
// insertIntoAddress(2,"Pune","Maharashtra","India") // throws an error
// insertIntoAddress(1,"Pune","Maharashtra","India")
function getFromUserAddress(userID) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            const getQuery = `
            SELECT u.user_id, u.username, a.address_id, a.city, a.state, a.contry 
            FROM "user" u JOIN address a ON u.user_id = a.user_id 
            WHERE u.user_id = $1
        `;
            const getData = yield client.query(getQuery, [userID]);
            if (getData.rows.length > 0) {
                console.log(getData.rows);
            }
            else {
                console.log("No address found for the given user ID.");
                return [];
            }
        }
        catch (e) {
            console.log(e, "error found :: may user with id do not mention address");
        }
    });
}
getFromUserAddress(7);
