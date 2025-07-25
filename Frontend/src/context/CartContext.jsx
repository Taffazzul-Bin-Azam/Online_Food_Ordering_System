// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const currency = "₹";
  const deliveryCharge = 40;

  const addToCart = (item) => {
    setCartItems((prev) => {
     const existing = prev.find((i) => i._id === item._id);
     if (existing) {
  return prev.map((i) =>
    i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
    );
  } 
  else {
  return [...prev, { ...item, quantity: 1 }];
  }

    });
  };

const removeFromCart = (_id) => {
  setCartItems((prev) => prev.filter((i) => i._id !== _id));
};


  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalCartAmount = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalCartAmount,
        currency,
        deliveryCharge,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
