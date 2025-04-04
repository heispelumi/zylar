import React, { createContext, useContext, useState } from "react";

// Create context for the cart
const CartContext = createContext(); 

export const useCart = () => useContext(CartContext); // Custom hook to use context

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  // Function to add an item to the cart
  const addToCart = (item) => {
    console.log("Adding item to cart:", item); // Debug log

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);

      if (existingItemIndex !== -1) {
        // If item exists in the cart, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity; // Add the quantity
        return updatedCart;
      } else {
        // If item doesn't exist, add it to the cart with an initial quantity
        return [...prevCart, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to toggle the cart drawer visibility
  const toggleCartDrawer = () => {
    setCartDrawerOpen((prev) => !prev);
    console.log("Cart drawer state:", !cartDrawerOpen); // Debug log
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, cartDrawerOpen, toggleCartDrawer }}
    >
      {children}
    </CartContext.Provider>
  );
};
