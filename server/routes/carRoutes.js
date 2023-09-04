const express = require('express');
const carControllers = require('../controllers/AllCars');

const router = express.Router();

router.get('/cars/search/:query', carControllers.searchCrossoverCars);
router.get('/cars/:id', carControllers.getCarById);


router.get('/cars', carControllers.getAllCars);



// POST Route
router.post('/cars', carControllers.addCar);

// DELETE Route
router.delete('/cars/:id', carControllers.deleteCar);

// PUT Route
router.put('/cars/:id', carControllers.updatedCar);



module.exports = router;
//