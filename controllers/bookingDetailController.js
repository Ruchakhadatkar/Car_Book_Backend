const BookingDetail = require("../models/bookingDetailModel");
const mongoose = require("mongoose");
const allCars = require("../data/CarsData");

const postBookingDetail = async (req, res) => {
  try {
    const {
      pickLocation,
      dropLocation,
      pickDate,
      dropDate,
      totalRent,
      carId,
      userId,
    } = req.body;

    const newBookingDetail = new BookingDetail({
      pickLocation,
      dropLocation,
      pickDate,
      dropDate,
      totalRent,
      carId,
      userId,
    });

    const savedBookingDetail = await newBookingDetail.save();
    res.status(201).json(savedBookingDetail);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getBookigDetails = async (req, res) => {
  console.log(req.params);
  const details = await BookingDetail.find({ userId: req.params.id }).populate(
    "carId"
  );

  res.status(200).json(details);
};

module.exports = {
  postBookingDetail,
  getBookigDetails,
};
