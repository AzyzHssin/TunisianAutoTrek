const conn = require('../index.js');

module.exports = {
  getAll: function (callback) {
    const sql = `SELECT * FROM luxurycars`;
    conn.query(sql, function (error, results) {
      if (error) {
        console.error('Error fetching luxurys:', error);
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },

  add: function (luxury, callback) {
    const sql = `INSERT INTO luxurycars (carName, carDesc, carIMG, carCategory, carPrice, carLocation, carSpecs, carFuelType, carEngineType, carPassengerCapacity) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    conn.query(sql, [luxury.carName, luxury.carDesc, luxury.carIMG, luxury.carCategory, luxury.carPrice, luxury.carLocation, luxury.carSpecs, luxury.carFuelType, luxury.carEngineType, luxury.carPassengerCapacity], function (error, results) {
      if (error) {
        console.error('Error adding luxury:', error);
        callback(error, null);
      } else {
        console.log('luxury added successfully:', results);
        callback(null, results);
      }
    });
  },
  

  delete: function (luxuryId, callback) {
    const sql = `DELETE FROM luxurycars WHERE id = ?`;
    conn.query(sql, [luxuryId], function (error, result) {
      if (error) {
        console.error('Error deleting luxury:', error);
        callback(error, null);
      } else {
        console.log('luxury deleted successfully:', result);
        callback(null, result);
      }
    });
  },

  update: function (luxuryId, updatedLuxury, callback) {
    const sql = `UPDATE luxurycars SET carName=?, carDesc=?, carIMG=?, carCategory=?, carPrice=?, carLocation=?, carSpecs=?, carFuelType=?, carEngineType=?, carPassengerCapacity=? WHERE id = ?`;
    conn.query(sql, [updatedLuxury.carName, updatedLuxury.carDesc, updatedLuxury.carIMG, updatedLuxury.carCategory, updatedLuxury.carPrice, updatedLuxury.carLocation, updatedLuxury.carSpecs, updatedLuxury.carFuelType, updatedLuxury.carEngineType, updatedLuxury.carPassengerCapacity, luxuryId], function (error, result) {
      if (error) {
        console.error('Error updating luxury:', error);
        callback(error, null);
      } else {
        console.log('luxury updated successfully:', result);
        callback(null, result);
      }
    });
  },
  
};