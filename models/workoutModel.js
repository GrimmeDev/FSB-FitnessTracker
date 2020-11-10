const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // CODE HERE
    // two items:
    // day
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            require: true,
        },
        name: {
            type: String,
            require: true,
        },
        duration: {
            type: Number,
            require: true,
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
    // exercies (array)
})


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;