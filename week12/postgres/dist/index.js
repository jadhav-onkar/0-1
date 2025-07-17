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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new pg_1.Client({
    connectionString: process.env.DB_URL
});
client.connect().then(() => {
    console.log("db connected");
}).catch(e => console.log("dit not conect", e));
function CreateUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield client.query(`
            CREATE TABLE users(
                id SERIAL NOT NULL PRIMARY KEY,
                username VARCHAR(50) NOT NULL UNIQUE,
                gmail VARCHAR(50) NOT NULL UNIQUE,
                password VARCHAR(50)
            )
        `);
        console.log("user created succesfully");
    });
}
function CreateAddressTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const address = yield client.query(`
            CREATE TABLE addresses(
                id SERIAL NOT NULL PRIMARY KEY,
                user_id INTEGER NOT NUll,
                city VARCHAR(50) NOT NULL,
                country VARCHAR(50) NOT NULL,
                pincode INTEGER NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);
        console.log("address table created succesfully");
    });
}
function InsertUsers(username, gmail, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.query(`
            INSERT INTO users (username, gmail,password) VALUES ($1,$2,$3)
        `, [username, gmail, password]);
        console.log("user added scuccesfully");
    });
}
function InsertAddresses(id, city, country, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        const address = yield client.query(`
            INSERT INTO addresses (user_id, city,country,pincode) VALUES ($1,$2,$3,$4)
        `, [id, city, country, pincode]);
        console.log("address added scuccesfully");
    });
}
// give address and user info of user with username ganesh
const getUserAddressInfo = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client.query(`
         SELECT u.username, u.gmail, a.city, a.country, a.pincode from users u 
         JOIN addresses a ON u.id = a.user_id 
         WHERE u.username = $1
        `, [username]);
    console.log(users.rows);
});
function transactions(user, address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.query(`BEGIN`);
            const inserted_user = yield client.query(`
                INSERT INTO users (username, gmail, password) VALUES ($1,$2,$3)
            `, [user.username, user.gmail, user.password]);
            const currentUser = yield client.query(`
                SELECT id from users WHERE username = $1
            `, [user.username]);
            const userId = currentUser.rows[0].id;
            yield client.query(`
                INSERT INTO addresses (user_id, city, country, pincode) VALUES ($1,$2,$3,$4)
            `, [userId, address.city, address.country, address.pincode]);
            console.log("user created succesfully");
            const end = yield client.query(`COMMIT`);
            console.log(end.command);
        }
        catch (e) {
            const end = yield client.query('COMMIT');
            console.log(end.command);
        }
    });
}
transactions({
    username: "amey",
    gmail: "amey@gmail.com",
    password: "amey123"
}, {
    city: "banglore",
    country: "india",
    pincode: 411006
});
