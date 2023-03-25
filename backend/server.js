const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

// Connect to the database
connectDB();

const app = express();

// Middleware that allows processing of Request data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/chicken", require("./routes/chicken.routes"));

// Start the server
app.listen(port, () => console.log("Server started on port " + port));
