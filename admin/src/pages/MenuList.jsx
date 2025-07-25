import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // ✅ Import Link

const MenuList = () => {
  const [menuItems, setMenuItems] = useState([]);

  // Fetch menu items on load
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/menu");
      setMenuItems(res.data);
    } catch (err) {
      console.error("Error fetching menu items:", err);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/menu/${id}`);
      setMenuItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Menu Items</h1>
      {menuItems.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item._id} className="border p-4 rounded shadow">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover mb-2"
              />
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-gray-600">₹{item.price}</p>
              <div className="flex justify-between mt-2">
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  onClick={() => deleteItem(item._id)}
                >
                  Delete
                </button>
                <Link
                  to={`/admin/edit/${item._id}`}
                  className="text-blue-600 underline px-2"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuList;
