const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const ADMIN_USER = {
  username: "admin",
  password: "admin123", // Replace with env/secure system later
};

// POST /api/admin/login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === ADMIN_USER.username &&
    password === ADMIN_USER.password
  ) {
    const token = jwt.sign({ username }, "secretkey", { expiresIn: "2h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
