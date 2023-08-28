const conn = require('../index.js');

module.exports = {
  getAll: function (callback) {
    const sql = `SELECT * FROM your_table_name`;
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
    const sql = `INSERT INTO your_table_name (column_name) VALUES (?)`;
    conn.query(sql, [crossover.carName], function (error, results) {
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
    const sql = `DELETE FROM your_table_name WHERE id = ?`;
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
    const sql = `UPDATE your_table_name SET column_name = ? WHERE id = ?`;
    conn.query(sql, [updatedCrossover.carName, crossoverId], function (error, result) {
      if (error) {
        console.error('Error updating crossover:', error);
        callback(error, null);
      } else {
        console.log('Crossover updated successfully:', result);
        callback(null, result);
      }
    });
  },
};