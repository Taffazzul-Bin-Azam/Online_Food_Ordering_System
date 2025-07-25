import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !image) {
      setError("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/menu", {
        name,
        price,
        image,
      });

      // Optional: Show message or redirect
      navigate("/admin/menu"); // Navigate back to menu list
    } catch (err) {
      console.error("Error adding item:", err);
      setError("Failed to add item");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add New Menu Item</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Chicken Curry"
          />
        </div>
        <div>
          <label className="block font-semibold">Price (₹)</label>
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="e.g. 250"
          />
        </div>
        <div>
          <label className="block font-semibold">Image URL</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="e.g. https://..."
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
