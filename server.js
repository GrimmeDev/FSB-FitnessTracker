const express = require("express");
const logger = require("morgan");
const mongojs = require("mongojs");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const databaseUrl = "workout";
const collections = ["exercises"];

mongoose.connect(`mongodb+srv://clusterAdmin:${process.env.mongodbPass}@cluster0.8pdpi.mongodb.net/workout?retryWrites=true&w=majority` || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes/htmlRoutes.js"));
app.use(require("./routes/apiRoutes.js"));

app.listen(3000, () => {
    console.log(`App running on port ${PORT}`);
});