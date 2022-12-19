
const express = require('express')
const mongoose = require('mongoose')
mongoose.set("strictQuery", false);

require('dotenv').config()

const workoutRoutes = require('./routes/workouts')

const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next()

})


// routes

app.use('/api/workouts',workoutRoutes)

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





