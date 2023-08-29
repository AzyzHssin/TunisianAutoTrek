const { LuxuryCars } = require('../db/models/index.js');

module.exports = {
  getAllLuxuryCars: function (req, res) {
    LuxuryCars.getAll(function (err, results) {
      if (err) {
        console.error('Error fetching Luxury Cars:', err);
        res.status(500).json({ error: 'Failed to load resource' });
      } else {
        res.json(results);
      }
    });
  },

      addLuxuryCar: function (req, res) {
        const luxury = {
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
       console.log('Luxury Object:', luxury);
     
       LuxuryCars.add(luxury, function (err, results) {
         if (err) {
           console.error('Error adding Luxury car:', err);
           res.status(500).json({ error: 'Failed to add Luxury car' });
         } else {
           res.status(201).json(results);
         }
       });
     },

     deleteLuxuryCar: function (req, res) {
       const luxuryId = req.params.id;
       LuxuryCars.delete(luxuryId, function (err, result) {
         if (err) {
           console.error('Error deleting Luxury car:', err);
           res.status(500).json({ error: 'Failed to delete Luxury Car' });
         } else {
           res.json({ message: 'Luxury Car deleted successfully', result });
         }
       });
     },
   
     updatedLuxury: function (req, res) {
       const luxuryId = req.params.id;
       const updatedLuxury = {
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
       LuxuryCars.update(luxuryId, updatedLuxury, function (err, result) {
         if (err) {
           console.error('Error updating Luxury car:', err);
           res.status(500).json({ error: 'Failed to update luxury car' });
         } else {
           res.json({ message: 'Luxury Car updated successfully', result });
         }
       });
     },

};