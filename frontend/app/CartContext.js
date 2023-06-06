"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [login, setLogin] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, login, setLogin, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
