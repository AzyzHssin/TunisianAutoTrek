const express = require('express');
const LuxuryCarControllers = require('../controllers/LuxuryCars');

const router = express.Router();

router.get('/luxury', LuxuryCarControllers.getAllLuxuryCars);

// POST Route
router.post('/luxury', LuxuryCarControllers.addLuxuryCar);

// DELETE Route
router.delete('/luxury/:id', LuxuryCarControllers.deleteLuxuryCar);

// PUT Route
router.put('/luxury/:id', LuxuryCarControllers.updatedLuxury);

module.exports = router;
//