import dotenv from 'dotenv';
dotenv.config();

import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // necesario para Supabase y otras DBs en la nube
    },
});

pool.connect()
    .then(client => {
        console.log('✅ Conexión exitosa a la base de datos');
        client.release();
    })
    .catch(err => {
        console.error('❌ Error conectando a la base de datos:', err);
    });

export const query = (text, params) => pool.query(text, params);
