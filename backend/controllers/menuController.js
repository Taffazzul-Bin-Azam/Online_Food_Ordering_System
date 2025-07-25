const MenuItem = require("../models/MenuItem");

// Get all menu items
const getMenu = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new menu item
const addMenuItem = async (req, res) => {
  const { name, price, image } = req.body;
  try {
    const newItem = new MenuItem({ name, price, image });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a menu item by ID
const deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a menu item by ID
const updateMenuItem = async (req, res) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Export all handlers
module.exports = {
  getMenu,
  addMenuItem,
  deleteMenuItem,
  updateMenuItem,
};
