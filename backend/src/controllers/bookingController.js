const pool = require('../db/pool');

const createBooking = async (req, res) => {
    try {
        const { car_id, car_name, customer_name, phone, email, days, total_price } = req.body;
        
        const result = await pool.query(
            `INSERT INTO bookings (car_id, car_name, customer_name, phone, email, days, total_price) 
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [car_id, car_name, customer_name, phone, email, days, total_price]
        );
        
        res.status(201).json({ 
            success: true, 
            message: 'Бронирование создано!',
            booking: result.rows[0]
        });
    } catch (error) {
        console.error('Ошибка:', error.message);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
};

const getAllBookings = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM bookings ORDER BY booking_date DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Ошибка:', error.message);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
};

module.exports = { createBooking, getAllBookings };