const pool = require('../db/pool');

const addCar = async (req, res) => {
    try {
        console.log('📥 Получен запрос на добавление машины');
        console.log('📦 Тело запроса:', req.body);
        
        const { name, description, img, price_day1, price_day1_3, price_day3_plus } = req.body;
        
        if (!name || !description || !img || !price_day1 || !price_day1_3 || !price_day3_plus) {
            console.log('❌ Не все поля заполнены');
            return res.status(400).json({ error: 'Все поля обязательны' });
        }
        
        console.log('✅ Данные прошли проверку');
        
        const result = await pool.query(
            `INSERT INTO cars (name, description, img, price_day1, price_day1_3, price_day3_plus) 
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [name, description, img, Number(price_day1), Number(price_day1_3), Number(price_day3_plus)]
        );
        
        console.log('✅ Машина добавлена, ID:', result.rows[0].id);
        res.status(201).json({ success: true, car: result.rows[0] });
        
    } catch (error) {
        console.error('❌ Ошибка в addCar:', error.message);
        console.error('📚 Стек ошибки:', error.stack);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addCar };