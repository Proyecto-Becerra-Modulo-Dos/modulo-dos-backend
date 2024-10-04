import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

export const basedatos = createPool({
    host: process.env.MYSQLHOST || 'localhost',
    user: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || '',
    port: process.env.MYSQLPORT || 3306,
    database: process.env.MYSQLDATABASE || 'adso',
})

export const pool = createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    port: process.env.MYSQL_PORT || 3306,
    database: process.env.MYSQL_DATABASE || 'adso',
})