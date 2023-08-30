import { config } from "dotenv";
config();
import mysql from "mysql2";

const db = mysql.createPool({
    host: process.env.dbHOST,
    user: process.env.dbUSER,
    password: process.env.dbPASSWORD,
    database: process.env.dbDATABASE,
})

export default db;