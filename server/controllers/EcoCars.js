const { EcoCars } = require('../db/models/index.js');

module.exports = {
  getAllEcoCars: function (req, res) {
    EcoCars.getAll(function (err, results) {
      if (err) {
        console.error('Error fetching Eco Cars:', err);
        res.status(500).json({ error: 'Failed to load resource' });
      } else {
        res.json(results);
      }
    });
  },

      addEcoCar: function (req, res) {
        const eco = {
          carName: req.body.carName,
          carDesc: req.body.carDesc,
          carIMG: req.body.carIMG, 
          carCategory: req.body.carCategory,
          carPrice: req.body.carPrice,
          carLocation: req.body.carLocation,
          carSpecs: req.body.carSpecs,
          carFuelType: req.body.carFuelType,
          carEngineType: req.body.carEngineType,
          carPassengerCapacity: req.body.carPassengerCapacity
        };
     //
       console.log('eco Object:', eco);
     
       EcoCars.add(eco, function (err, results) {
         if (err) {
           console.error('Error adding eco car:', err);
           res.status(500).json({ error: 'Failed to add eco car' });
         } else {
           res.status(201).json(results);
         }
       });
     },

     deleteEcoCar: function (req, res) {
       const ecoId = req.params.id;
       EcoCars.delete(ecoId, function (err, result) {
         if (err) {
           console.error('Error deleting Eco car:', err);
           res.status(500).json({ error: 'Failed to delete Eco Car' });
         } else {
           res.json({ message: 'Eco Car deleted successfully', result });
         }
       });
     },
   
     updatedEco: function (req, res) {
       const ecoId = req.params.id;
       const updatedEco = {
        carName: req.body.carName,
        carDesc: req.body.carDesc,
        carIMG: req.body.carIMG, 
        carCategory: req.body.carCategory,
        carPrice: req.body.carPrice,
        carLocation: req.body.carLocation,
        carSpecs: req.body.carSpecs,
        carFuelType: req.body.carFuelType,
        carEngineType: req.body.carEngineType,
        carPassengerCapacity: req.body.carPassengerCapacity
      
       };
       EcoCars.update(ecoId, updatedEco, function (err, result) {
         if (err) {
           console.error('Error updating eco car:', err);
           res.status(500).json({ error: 'Failed to update eco car' });
         } else {
           res.json({ message: 'Eco Car updated successfully', result });
         }
       });
     },

};