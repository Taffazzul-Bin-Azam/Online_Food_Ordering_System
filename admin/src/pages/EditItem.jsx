import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({ name: "", price: "", image: "" });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/menu/${id}`)
      .then(res => setItem(res.data))
      .catch(err => console.error("Error fetching item:", err));
  }, [id]);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/menu/${id}`, item);
      navigate("/admin/menu");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Menu Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" value={item.name} onChange={handleChange} className="w-full border p-2" />
        <input type="number" name="price" placeholder="Price" value={item.price} onChange={handleChange} className="w-full border p-2" />
        <input type="text" name="image" placeholder="Image URL" value={item.image} onChange={handleChange} className="w-full border p-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update Item</button>
      </form>
    </div>
  );
};

export default EditItem;
