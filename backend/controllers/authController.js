const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const ADMIN = {
  username: "admin",
  password: bcrypt.hashSync("admin123", 10) // use bcrypt
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN.username && bcrypt.compareSync(password, ADMIN.password)) {
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
