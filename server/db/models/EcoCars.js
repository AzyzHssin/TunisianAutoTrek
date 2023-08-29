const conn = require('../index.js');

module.exports = {
  getAll: function (callback) {
    const sql = `SELECT * FROM ecocars`;
    conn.query(sql, function (error, results) {
      if (error) {
        console.error('Error fetching Ecos:', error);
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },

  add: function (eco, callback) {
    const sql = `INSERT INTO ecocars (carName, carDesc, carIMG, carCategory, carPrice, carLocation, carSpecs, carFuelType, carEngineType, carPassengerCapacity) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    conn.query(sql, [eco.carName, eco.carDesc, eco.carIMG, eco.carCategory, eco.carPrice, eco.carLocation, eco.carSpecs, eco.carFuelType, eco.carEngineType, eco.carPassengerCapacity], function (error, results) {
      if (error) {
        console.error('Error adding eco:', error);
        callback(error, null);
      } else {
        console.log('Eco added successfully:', results);
        callback(null, results);
      }
    });
  },
  

  delete: function (ecoId, callback) {
    const sql = `DELETE FROM ecocars WHERE id = ?`;
    conn.query(sql, [ecoId], function (error, result) {
      if (error) {
        console.error('Error deleting Eco:', error);
        callback(error, null);
      } else {
        console.log('Eco deleted successfully:', result);
        callback(null, result);
      }
    });
  },

  update: function (ecoId, updatedEco, callback) {
    const sql = `UPDATE ecocars SET carName=?, carDesc=?, carIMG=?, carCategory=?, carPrice=?, carLocation=?, carSpecs=?, carFuelType=?, carEngineType=?, carPassengerCapacity=? WHERE id = ?`;
    conn.query(sql, [updatedEco.carName, updatedEco.carDesc, updatedEco.carIMG, updatedEco.carCategory, updatedEco.carPrice, updatedEco.carLocation, updatedEco.carSpecs, updatedEco.carFuelType, updatedEco.carEngineType, updatedEco.carPassengerCapacity, ecoId], function (error, result) {
      if (error) {
        console.error('Error updating Eco:', error);
        callback(error, null);
      } else {
        console.log('Eco updated successfully:', result);
        callback(null, result);
      }
    });
  },
  
};