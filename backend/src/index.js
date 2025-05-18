const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// routes
const userRoutes = require("./routes/sampleRoutes");

// routeUsage
app.use("/api/users", userRoutes);

// connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Error: ", err);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Backend Running");
});
