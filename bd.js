import dotenv from 'dotenv';
dotenv.config();


console.log("la base de datos es:", process.env.DATABASE_URL);
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

export const getConnection = () => pool.connect();
export const query = (text, params) => pool.query(text, params);
