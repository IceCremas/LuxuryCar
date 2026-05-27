require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'Ss2006$$',   // ← впиши свой пароль сюда
    host: 'localhost',
    port: 5432,
    database: 'luxury_car'
});

async function test() {
    try {
        const result = await pool.query('SELECT * FROM cars');
        console.log('Подключение работает! Машин найдено:', result.rows.length);
    } catch (err) {
        console.error('Ошибка:', err.message);
    }
}

test();