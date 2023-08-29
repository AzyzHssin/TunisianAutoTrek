const { MixedCars } = require('../db/models/index.js');

module.exports = {
  getAllMixedCars: function (req, res) {
    MixedCars.getAll(function (err, results) {
      if (err) {
        console.error('Error fetching Mixed Cars:', err);
        res.status(500).json({ error: 'Failed to load resource' });
      } else {
        res.json(results);
      }
    });
  },

      addMixedCar: function (req, res) {
        const mixed = {
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
       console.log('MixedCar Object:', mixed);
     
       MixedCars.add(mixed, function (err, results) {
         if (err) {
           console.error('Error adding Mixed car:', err);
           res.status(500).json({ error: 'Failed to add Mixed car' });
         } else {
           res.status(201).json(results);
         }
       });
     },

     deleteMixedCar: function (req, res) {
       const mixedcarId = req.params.id;
       MixedCars.delete(mixedcarId, function (err, result) {
         if (err) {
           console.error('Error deleting Mixed car:', err);
           res.status(500).json({ error: 'Failed to delete Mixed Car' });
         } else {
           res.json({ message: 'Mixed Car deleted successfully', result });
         }
       });
     },
   
     updatedMixed: function (req, res) {
       const mixedcarId = req.params.id;
       const updatedMixed = {
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
       MixedCars.update(mixedcarId, updatedMixed, function (err, result) {
         if (err) {
           console.error('Error updating Mixed car:', err);
           res.status(500).json({ error: 'Failed to update Mixed car' });
         } else {
           res.json({ message: 'Mixed Car updated successfully', result });
         }
       });
     },

};