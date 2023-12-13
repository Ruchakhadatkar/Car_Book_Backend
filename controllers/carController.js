const Car = require("../models/carModel");
const mongoose = require("mongoose");
const allCars = require("../data/CarsData");

const postCars = async(req,res)=>{
    await Car.deleteMany()
  const cars = await Car.insertMany(allCars)
  res.json(cars)
}

//get all cars
const getCars = async (req, res) => {
//   const car_id = req.params.id;
const cars = await Car.find()

  res.status(200).json(cars);
};

//get a single car
const getCar = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such car" });
  }

  const car = await Car.findById(id);

  if (!car) {
    return res.status(400).json({ error: "No such car" });
  }
  res.status(200).json(car);
};

module.exports = {
  getCars,
  getCar,
  postCars,
};
