import React, { useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [form, setForm] = useState({
    customerName: "",
    address: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    try {
      // Ensure each item has a unique key when sent (use item.id or item._id)
      const orderData = {
        ...form,
        items: cartItems.map((item) => ({
          id: item.id, // or _id if it exists
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
      };

      await axios.post("http://localhost:5000/api/order", orderData);

      clearCart();
      alert("Order placed successfully!");
      navigate("/"); // redirect to homepage or success page
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Order failed!");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="customerName"
          placeholder="Name"
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Delivery Address"
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
          className="w-full border p-2"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
