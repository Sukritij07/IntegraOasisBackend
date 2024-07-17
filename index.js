const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./Routes/user");
const cartRoutes = require("./Routes/cart");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/Integra-Oasis", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/user", authRoutes);
app.use("/api", cartRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
