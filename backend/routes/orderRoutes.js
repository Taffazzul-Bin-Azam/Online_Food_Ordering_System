const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// ✅ Create new order
router.post("/", async (req, res) => {
  const { customerName, address, phone, items } = req.body;

  try {
    const newOrder = new Order({
      customerName,
      address,
      phone,
      items,
      status: "pending",
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Mark order as completed
router.patch("/:id/complete", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status: "completed" },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
