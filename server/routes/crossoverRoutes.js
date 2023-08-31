const express = require('express');
const crossoverCarControllers = require('../controllers/CrossoverCars');

const router = express.Router();

router.get('/crossovers/search/:query', crossoverCarControllers.searchCrossoverCars);
router.get('/crossovers/:id', crossoverCarControllers.getCrossoverCarById);


router.get('/crossovers', crossoverCarControllers.getAllCrossoverCars);



// POST Route
router.post('/crossovers', crossoverCarControllers.addCrossoverCar);

// DELETE Route
router.delete('/crossovers/:id', crossoverCarControllers.deleteCrossoverCar);

// PUT Route
router.put('/crossovers/:id', crossoverCarControllers.updatedCrossover);



module.exports = router;
//