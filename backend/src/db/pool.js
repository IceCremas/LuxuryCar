const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'Ss2006$$',      
    host: 'localhost',
    port: 5432,
    database: 'luxury_car'
});

module.exports = pool;