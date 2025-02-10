require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./src/config/db");
const contactRoutes = require("./src/routes/contactRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/contacts", contactRoutes);

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
