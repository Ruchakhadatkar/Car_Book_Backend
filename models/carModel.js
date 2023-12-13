const mongoose = require("mongoose");


const carModel = new mongoose.Schema({
  carName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  fuelType: {
    type: String,
    required: true,
  },
  seats: {
    type: String,
    required: true,
  },
  fair: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model("Car", carModel);
module.exports = Car;
