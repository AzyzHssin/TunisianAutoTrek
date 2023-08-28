const { crossoverCars } = require('../database/models/index.js');

module.exports = {
    getAllCrossoverCars: function (req, res) {
        crossoverCars.getAll(function (err, results) {
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
      
       };
     
       console.log('Crossover Object:', crossover);
     
       crossoverCars.add(crossover, function (err, results) {
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
       crossoverCars.delete(crossovertId, function (err, result) {
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
      
       };
       crossoverCars.update(crossovertId, updatedCrossover, function (err, result) {
         if (err) {
           console.error('Error updating crossover car:', err);
           res.status(500).json({ error: 'Failed to update crossover car' });
         } else {
           res.json({ message: 'Crossover Car updated successfully', result });
         }
       });
     },

};
