const express = require('express');
const mixedCarControllers = require('../controllers/MixedCars');

const router = express.Router();

router.get('/mixed', mixedCarControllers.getAllMixedCars);

// POST Route
router.post('/mixed', mixedCarControllers.addMixedCar);

// DELETE Route
router.delete('/mixed/:id', mixedCarControllers.deleteMixedCar);

// PUT Route
router.put('/mixed/:id', mixedCarControllers.updatedMixed);

module.exports = router;
