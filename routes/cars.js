const express = require("express");
const { getCars, getCar, postCars } = require("../controllers/carController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// router.post("/", postCars )

//require auth for all workout routes
router.use(requireAuth);



//Get all workouts
router.get("/", getCars);

//Get single workout
router.get("/:id", getCar);





module.exports = router;
