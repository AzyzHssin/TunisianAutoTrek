const conn = require('../index.js');

module.exports = {
  getAll: function (callback) {
    const sql = `SELECT * FROM crossovercars`;
    conn.query(sql, function (error, results) {
      if (error) {
        console.error('Error fetching crossovers:', error);
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },

  add: function (crossover, callback) {
    const sql = `INSERT INTO crossovercars (carName, carDesc, carIMG, carIMG2, carIMG3, carIMG4 , carCategory, carPrice, carLocation, carSpecs, carFuelType, carEngineType, carPassengerCapacity) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?)`;
    conn.query(sql, [crossover.carName, crossover.carDesc, crossover.carIMG, crossover.carIMG2, crossover.carIMG3, crossover.carIMG4, crossover.carCategory, crossover.carPrice, crossover.carLocation, crossover.carSpecs, crossover.carFuelType, crossover.carEngineType, crossover.carPassengerCapacity], function (error, results) {
      if (error) {
        console.error('Error adding crossover:', error);
        callback(error, null);
      } else {
        console.log('Crossover added successfully:', results);
        callback(null, results);
      }
    });
  },
  

  delete: function (crossoverId, callback) {
    const sql = `DELETE FROM crossovercars WHERE id = ?`;
    conn.query(sql, [crossoverId], function (error, result) {
      if (error) {
        console.error('Error deleting crossover:', error);
        callback(error, null);
      } else {
        console.log('Crossover deleted successfully:', result);
        callback(null, result);
      }
    });
  },

  update: function (crossoverId, updatedCar, callback) {
    const sql = `UPDATE crossovercars SET carName=?, carDesc=?, carIMG=? , carIMG2=? , carIMG3=? , carIMG4=? , carCategory=?, carPrice=?, carLocation=?, carSpecs=?, carFuelType=?, carEngineType=?, carPassengerCapacity=? WHERE id = ?`;
    conn.query(sql, [updatedCar.carName, updatedCar.carDesc, updatedCar.carIMG , updatedCar.carIMG2, updatedCar.carIMG3, updatedCar.carIMG4, updatedCar.carCategory, updatedCar.carPrice, updatedCar.carLocation, updatedCar.carSpecs, updatedCar.carFuelType, updatedCar.carEngineType, updatedCar.carPassengerCapacity, crossoverId], function (error, result) {
      if (error) {
        console.error('Error updating crossover:', error);
        callback(error, null);
      } else {
        console.log('Crossover updated successfully:', result);
        callback(null, result);
      }
    });
  },


  carControllerss: function (query, callback) {
    const searchQuery = `%${query.toLowerCase()}%`;
    const numericValue = parseFloat(query);
  
    let sql;
    let params;
  
    if (isNaN(numericValue)) {
      sql = `
        SELECT * FROM crossovercars
        WHERE LOWER(carName) LIKE ?
      `;
      params = [searchQuery];
    } else {
      sql = `
        SELECT * FROM crossovercars
        WHERE LOWER(carName) LIKE ? OR carPrice <= ?
      `;
      params = [searchQuery, numericValue];
    }
  
    conn.query(sql, params, function (error, results) {
      if (error) {
        console.error('Error searching cars:', error);
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  },


  getById: function (carId, callback) {
    const sql = `SELECT * FROM crossovercars WHERE id = ?`;
    conn.query(sql, [carId], function (error, results) {
      if (error) {
        console.error('Error fetching crossover by ID:', error);
        callback(error, null);
      } else {
        if (results.length === 0) {
          callback(null, null);
        } else {
          callback(null, results[0]);
        }
      }
    });
  },
  

};