const express = require('express');
const ecoCarControllers = require('../controllers/EcoCars');

const router = express.Router();

router.get('/ecos', ecoCarControllers.getAllEcoCars);

// POST Route
router.post('/ecos', ecoCarControllers.addEcoCar);

// DELETE Route
router.delete('/ecos/:id', ecoCarControllers.deleteEcoCar);

// PUT Route
router.put('/ecos/:id', ecoCarControllers.updatedEco);

module.exports = router;
//