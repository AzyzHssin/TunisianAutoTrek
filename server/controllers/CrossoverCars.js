const { CrossoverCars } = require('../db/models/index.js');

module.exports = {
  getAllCrossoverCars: function (req, res) {
    CrossoverCars.getAll(function (err, results) {
      if (err) {
        console.error('Error fetching crossover Cars:', err);
        res.status(500).json({ error: 'Failed to load resource' });
      } else {
        res.json(results);
      }
    });
  },

      addCrossoverCar: function (req, res) {
        const crossover = {
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
       console.log('Crossover Object:', crossover);
     
       CrossoverCars.add(crossover, function (err, results) {
         if (err) {
           console.error('Error adding crossover car:', err);
           res.status(500).json({ error: 'Failed to add crossover car' });
         } else {
           res.status(201).json(results);
         }
       });
     },

     deleteCrossoverCar: function (req, res) {
       const crossovertId = req.params.id;
       CrossoverCars.delete(crossovertId, function (err, result) {
         if (err) {
           console.error('Error deleting crossover car:', err);
           res.status(500).json({ error: 'Failed to delete Crossover Car' });
         } else {
           res.json({ message: 'Crossover Car deleted successfully', result });
         }
       });
     },
   
     updatedCrossover: function (req, res) {
       const crossovertId = req.params.id;
       const updatedCrossover = {
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
       CrossoverCars.update(crossovertId, updatedCrossover, function (err, result) {
         if (err) {
           console.error('Error updating crossover car:', err);
           res.status(500).json({ error: 'Failed to update crossover car' });
         } else {
           res.json({ message: 'Crossover Car updated successfully', result });
         }
       });
     },

};
