const express = require("express");
const logger = require("morgan");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const databaseUrl = "workout";
const collections = ["exercises"];

const db = mongojs(databaseUrl, collections);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/FitnessTracker", {
    useNewUrlParser: true
})

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

db.on("error", error => {
    console.log("Database Error:", error);
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});