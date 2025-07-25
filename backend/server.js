// backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Route imports
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");
const adminAuthRoutes = require('./routes/adminAuth'); // Admin routes

// Load environment variables
dotenv.config();

// ✅ Initialize express before using it
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/menu", menuRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminAuthRoutes); // ✅ This now comes after `app` is defined

// MongoDB Connection and Server Start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on http://localhost:${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error("MongoDB connection failed:", err));
