const express = require('express');
const { addCar } = require('../controllers/adminController');
const router = express.Router();

router.post('/cars', addCar);

module.exports = router;