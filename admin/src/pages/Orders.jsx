import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await axios.get("http://localhost:5000/api/order");
    setOrders(res.data);
  };

  const markCompleted = async (id) => {
    await axios.patch(`http://localhost:5000/api/order/${id}/complete`);
    fetchOrders(); // Refresh list
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Customer Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="border p-4 rounded shadow">
              <h2 className="font-bold">Customer: {order.customerName}</h2>
              <p>Phone: {order.phone}</p>
              <p>Address: {order.address}</p>
              <p>Status: 
                <span className={`ml-2 font-semibold ${order.status === "completed" ? "text-green-600" : "text-yellow-600"}`}>
                  {order.status}
                </span>
              </p>
              <ul className="mt-2 list-disc pl-4">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} × {item.quantity} – ₹{item.price}
                  </li>
                ))}
              </ul>
              {order.status !== "completed" && (
                <button
                  className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  onClick={() => markCompleted(order._id)}
                >
                  Mark as Completed
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
