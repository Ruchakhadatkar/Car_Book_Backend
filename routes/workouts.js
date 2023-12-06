const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");

const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

//require auth for all workout routes
router.use(requireAuth)

//Get all workouts
router.get("/", getWorkouts);

//Get single workout
router.get("/:id", getWorkout);

//Post a new workout
router.post("/", createWorkout);

//Delete a workout
router.delete("/:id", deleteWorkout);

//Upadate a workout
router.patch("/:id", updateWorkout);

module.exports = router;
