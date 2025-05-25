const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "This is the user route" });
  } catch (error) {
    res.status(500).json({ error: "Route Invalid" });
  }
});

module.exports = router;
