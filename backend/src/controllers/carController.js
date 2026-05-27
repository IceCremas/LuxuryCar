const pool = require('../db/pool');

const getAllCars = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM cars ORDER BY id');
        res.json(result.rows);
    } catch (error) {
        console.error('Ошибка в getAllCars:', error.message);
        res.status(500).json({ error: error.message });
    }
};

const getCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM cars WHERE id = $1', [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Машина не найдена' });
        }
        
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Ошибка в getCarById:', error.message);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllCars, getCarById };