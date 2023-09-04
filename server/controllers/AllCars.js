const { CrossoverCars } = require('../db/models/index.js');

module.exports = {
  getAllCars: function (req, res) {
    CrossoverCars.getAll(function (err, results) {
      if (err) {
        console.error('Error fetching crossover Cars:', err);
        res.status(500).json({ error: 'Failed to load resource' });
      } else {
        res.json(results);
      }
    });
  },

      addCar: function (req, res) {
        const crossover = {
          carName: req.body.carName,
          carDesc: req.body.carDesc,
          carIMG: req.body.carIMG, 
          carIMG2: req.body.carIMG2,
          carIMG3: req.body.carIMG3,
          carIMG4: req.body.carIMG4,
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

        



     deleteCar: function (req, res) {
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
   
     updatedCar: function (req, res) {
       const crossovertId = req.params.id;
       const updatedCar = {
        carName: req.body.carName,
        carDesc: req.body.carDesc,
        carIMG: req.body.carIMG, 
        carIMG2: req.body.carIMG2,
        carIMG3: req.body.carIMG3,
        carIMG4: req.body.carIMG4,
        carCategory: req.body.carCategory,
        carPrice: req.body.carPrice,
        carLocation: req.body.carLocation,
        carSpecs: req.body.carSpecs,
        carFuelType: req.body.carFuelType,
        carEngineType: req.body.carEngineType,
        carPassengerCapacity: req.body.carPassengerCapacity
      
       };
       CrossoverCars.update(crossovertId, updatedCar, function (err, result) {
         if (err) {
           console.error('Error updating crossover car:', err);
           res.status(500).json({ error: 'Failed to update crossover car' });
         } else {
           res.json({ message: 'Crossover Car updated successfully', result });
         }
       });
     },




     getCarById: function (req, res) {
      const carId = req.params.id;
      CrossoverCars.getById(carId, function (err, car) {
        if (err) {
          console.error('Error fetching crossover Car by ID:', err);
          res.status(500).json({ error: 'Failed to load resource' });
        } else {
          res.json(car);
        }
      });
    },

     


    searchCrossoverCars: function (req, res) {
      let query = req.params.query.toLowerCase();
    
      CrossoverCars.carControllerss(query, function (err, results) {
        if (err) {
          console.error('Error searching crossover Cars:', err);
          res.status(500).json({ error: 'Failed to load resource' });
        } else {
          res.json(results);
        }
      });
    }
    
     
};


