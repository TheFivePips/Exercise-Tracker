const Workout = require('../models/WorkoutModel.js')
const mongoose = require('mongoose')


// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// get single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such workout exists" });
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: "No such workout exists"})
    }
    
    res.status(200).json(workout)
    
}

// post a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps, sets } = req.body;

    //   add document to the DB
  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
      sets
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout exists" });
    }
    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout) {
      return res.status(404).json({ error: "No such workout exists" });
    }
    res.status(200).json({workout})


}

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout exists" });
    }
    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!workout) {
      return res.status(404).json({ error: "No such workout exists" });
    }
    res.status(200).json({ workout });

}

module.exports = {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}