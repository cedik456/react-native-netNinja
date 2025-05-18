const express = require("express");
const router = express.Router();

router.get("/sample", (req, res) => {
  try {
    res.status(200).json({ message: "Sample route" });
  } catch (error) {
    res.status(500).json({ error: "Route Invalid" });
  }
});

router.get("/", (req, res) => {
  try {
    res.send("User routes running");
  } catch (error) {
    console.log("Error: ", error);
  }
});

module.exports = router;
