require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("BB Landscaping API Running");
});

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);
app.use(
  "/api/enquiries",
  require("./routes/enquiryRoutes")
);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});