const mongoose = require("mongoose");

const bookingDetailModel = new mongoose.Schema(
  {
    pickLocation: {
      type: String,
      required: true,
    },
    dropLocation: {
      type: String,
      required: true,
    },
    pickDate: {
      type: String,
      required: true,
    },
    dropDate: {
      type: String,
      required: true,
    },
    totalRent: {
      type: Number,
      required: true,
    },
    carId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Car" },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const BookingDetail = mongoose.model("BookingDetail", bookingDetailModel);
module.exports = BookingDetail;
