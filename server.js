
const express = require('express')
const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
require('dotenv').config()
const workoutRoutes = require('./routes/workoutsRoutes')
const userRoutes = require('./routes/userRoutes');


const app = express()

// middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, "./frontend/build")))

// serving the frontend
app.get("*", function ( req, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function(err) {
      res.status(500).send(err)
    }
  )
})



// routes

app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes);


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
      // listening for requests
      app.listen(process.env.PORT, () => {
        console.log("Connected to DB and listening on port 4000");
      });
    })
    .catch((error) => {
        console.log(error);
    }
)





