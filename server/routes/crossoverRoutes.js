
const express = require('express');
const crossoverCarControllers = require('../controllers/CrossoverCars');

const router = express.Router();


router.get('/crossovers', crossoverCarControllers.getAllCrossoverCars);
// router POST 
// router DELETE
// router PUT




module.exports = router;
