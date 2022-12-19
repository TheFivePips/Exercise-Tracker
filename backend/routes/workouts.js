const express = require("express")

const router = express.Router()

// get all workoutes
router.get('/', (req, res) => {
    res.json({msg: "GET all workouts"})
})
// get single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "GET one workout" });
});
// post a new workout
router.post("/", (req, res) => {
  res.json({ msg: "POST a new workout" });
});
// delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});
// update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
});
module.exports = router