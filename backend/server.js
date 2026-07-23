require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

// Connect MongoDB
connectDB();

// CORS Configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://bb-landscaping-git-main-aj-team3.vercel.app",
      "https://bb-landscaping-chl8kwe9i-aj-team3.vercel.app",
    ],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("BB Landscaping API Running");
});

// Routes
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/enquiries",
  require("./routes/enquiryRoutes")
);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});