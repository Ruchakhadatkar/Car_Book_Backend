const express = require("express");
const {
  postBookingDetail,
  getBookigDetails,
} = require("../controllers/bookingDetailController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.post("/", postBookingDetail);

router.get("/details/:id", getBookigDetails);

//require auth for all workout routes
router.use(requireAuth);

module.exports = router;
