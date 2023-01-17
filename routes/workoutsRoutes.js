const express = require("express")
const requireAuth = require('../middleware/requireAuth')
const { createWorkout, getWorkouts, getSingleWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController')

// require authorization for all routes
const router = express.Router();

router.use(requireAuth)

// get all workoutes
router.get('/', getWorkouts)

// get single workout
router.get("/:id", getSingleWorkout);

// post a new workout
router.post("/", createWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

// update a workout
router.patch("/:id", updateWorkout);
module.exports = router