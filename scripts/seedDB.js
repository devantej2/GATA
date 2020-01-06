const mongoose = require("mongoose");
const db = require("../models");

//empties task collection & inserts these tasks

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/gata");

const taskSeed = [
    {
        task: "Wake Up: 6 am",
        completed: true,
        date: new Date(2019, 12, 20)
    },
    {
        task: "Morning Reflection",
        completed: true,
        date: new Date(2019, 12, 20)
    },
    {
        task: "Workout",
        completed: true,
        date: new Date(2019, 12, 20)
    },
    {
        task: "Don't Eat Junkfood",
        completed: false,
        date: new Date(2019, 12, 20)
    },
    {
        task: "Bed by 11pm",
        completed: true,
        date: new Date(2019, 12, 20)
    }
];

db.Task
    .remove({})
    .then(()=>db.Task.collection.insertMany(taskSeed))
    .then(data => {
        console.log(data.result.n + " tasks inserted.");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })