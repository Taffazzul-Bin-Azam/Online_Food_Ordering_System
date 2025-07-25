import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import MenuCard from "../components/MenuCard";
import axios from "axios"; // Add this line

const Menu = () => {
  const [items, setItems] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // 🔁 Fetch from backend instead of localStorage
    const fetchMenuItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/menu");
        setItems(res.data); // set backend data directly
      } catch (err) {
        console.error("Error fetching menu items:", err);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div className="pt-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Delicious Menu
      </h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No menu items available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-lg font-medium text-green-700 mb-4">
                  ₹{item.price}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
