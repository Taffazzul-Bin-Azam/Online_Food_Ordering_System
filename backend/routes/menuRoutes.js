const express = require("express");
const {
  getMenu,
  addMenuItem,
  deleteMenuItem,
  updateMenuItem,
} = require("../controllers/menuController");

const router = express.Router();

router.get("/", getMenu);
router.post("/", addMenuItem);
router.delete("/:id", deleteMenuItem);
router.put("/:id", updateMenuItem); // <-- Make sure this route is here!

module.exports = router;
