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
    const sql = `INSERT INTO crossovercars (carName, carDesc, carIMG, carCategory, carPrice, carLocation, carSpecs, carFuelType, carEngineType, carPassengerCapacity) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    conn.query(sql, [crossover.carName, crossover.carDesc, crossover.carIMG, crossover.carCategory, crossover.carPrice, crossover.carLocation, crossover.carSpecs, crossover.carFuelType, crossover.carEngineType, crossover.carPassengerCapacity], function (error, results) {
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

  update: function (crossoverId, updatedCrossover, callback) {
    const sql = `UPDATE crossovercars SET carName=?, carDesc=?, carIMG=?, carCategory=?, carPrice=?, carLocation=?, carSpecs=?, carFuelType=?, carEngineType=?, carPassengerCapacity=? WHERE id = ?`;
    conn.query(sql, [updatedCrossover.carName, updatedCrossover.carDesc, updatedCrossover.carIMG, updatedCrossover.carCategory, updatedCrossover.carPrice, updatedCrossover.carLocation, updatedCrossover.carSpecs, updatedCrossover.carFuelType, updatedCrossover.carEngineType, updatedCrossover.carPassengerCapacity, crossoverId], function (error, result) {
      if (error) {
        console.error('Error updating crossover:', error);
        callback(error, null);
      } else {
        console.log('Crossover updated successfully:', result);
        callback(null, result);
      }
    });
  },


  searchCars: function (query, callback) {
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
          callback(null, null); // Car not found
        } else {
          callback(null, results[0]); // Return the first result
        }
      }
    });
  },
  

};