const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/db");
require("dotenv").config();

// Initialize Express App
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all requests
app.use(morgan("dev")); // Log HTTP requests

// Routes
app.use("/contacts", contactRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to Contact Management API");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

module.exports = app;
