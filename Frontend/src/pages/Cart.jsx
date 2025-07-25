// pages/Cart.jsx
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    currency,
    deliveryCharge,
  } = useCart();

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="pt-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white shadow rounded p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    ₹{item.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <p className="text-lg font-bold">
                  ₹{item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          {/* Cart Totals */}
          <div className="bg-gray-100 p-6 rounded shadow mt-4">
            <h3 className="text-xl font-bold mb-2">Summary</h3>
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>{currency}{getTotalCartAmount()}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Delivery</span>
              <span>{currency}{getTotalCartAmount() > 0 ? deliveryCharge : 0}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>
                {currency}
                {getTotalCartAmount() > 0
                  ? getTotalCartAmount() + deliveryCharge
                  : 0}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full mt-4 bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
