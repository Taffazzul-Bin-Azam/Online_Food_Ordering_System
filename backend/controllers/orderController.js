const Order = require('../models/Order');

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createOrder = async (req, res) => {
  const { customerName, address, phone, items } = req.body;
  try {
    const newOrder = new Order({ customerName, address, phone, items });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getOrders, createOrder };
