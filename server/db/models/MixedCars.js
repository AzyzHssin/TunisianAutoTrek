const conn = require('../index.js');

module.exports = {
  getAll: function (callback) {
    const sql = `SELECT * FROM mixedcars`;
    conn.query(sql, function (error, results) {
      if (error) {
        console.error('Error fetching Mixed Cars:', error);
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },

  add: function (mixed, callback) {
    const sql = `INSERT INTO mixedcars (carName, carDesc, carIMG, carCategory, carPrice, carLocation, carSpecs, carFuelType, carEngineType, carPassengerCapacity) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    conn.query(sql, [mixed.carName, mixed.carDesc, mixed.carIMG, mixed.carCategory, mixed.carPrice, mixed.carLocation, mixed.carSpecs, mixed.carFuelType, mixed.carEngineType, mixed.carPassengerCapacity], function (error, results) {
      if (error) {
        console.error('Error adding mixed:', error);
        callback(error, null);
      } else {
        console.log('Mixed Car added successfully:', results);
        callback(null, results);
      }
    });
  },
  

  delete: function (mixedcarId, callback) {
    const sql = `DELETE FROM mixedcars WHERE id = ?`;
    conn.query(sql, [mixedcarId], function (error, result) {
      if (error) {
        console.error('Error deleting Mixed Car:', error);
        callback(error, null);
      } else {
        console.log('Mixed Car deleted successfully:', result);
        callback(null, result);
      }
    });
  },

  update: function (mixedcarId, updatedMixed, callback) {
    const sql = `UPDATE mixedcars SET carName=?, carDesc=?, carIMG=?, carCategory=?, carPrice=?, carLocation=?, carSpecs=?, carFuelType=?, carEngineType=?, carPassengerCapacity=? WHERE id = ?`;
    conn.query(sql, [updatedMixed.carName, updatedMixed.carDesc, updatedMixed.carIMG, updatedMixed.carCategory, updatedMixed.carPrice, updatedMixed.carLocation, updatedMixed.carSpecs, updatedMixed.carFuelType, updatedMixed.carEngineType, updatedMixed.carPassengerCapacity, mixedcarId], function (error, result) {
      if (error) {
        console.error('Error updating Mixed Car:', error);
        callback(error, null);
      } else {
        console.log('Mixed Car updated successfully:', result);
        callback(null, result);
      }
    });
  },
  
};