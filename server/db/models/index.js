const MixedCars = require('../models/MixedCars')
const CrossoverCars = require("../models/CrossoverCars.js");
const EcoCars = require('../models/EcoCars.js')
const LuxuryCars = require('../models/LuxuryCars.js')

const db = {
  MixedCars:MixedCars,
  CrossoverCars: CrossoverCars,
  EcoCars: EcoCars,
  LuxuryCars: LuxuryCars
};

module.exports = db;
