import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(); // Create context

export const useCart = () => useContext(CartContext); // Hook to use context

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  // Function to add an item to the cart
  const addToCart = (item) => {
    console.log("Adding item to cart:", item); // Debug log

    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // If item exists, update quantity instead of adding a duplicate
        return prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: (cartItem.quantity || 1) + item.quantity }
              : cartItem
          );
      } else {
        // Add new item with initial quantity
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to remove an item
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to toggle cart drawer
  const toggleCartDrawer = () => {
    setCartDrawerOpen((prev) => !prev);
    console.log("Cart drawer state:", !cartDrawerOpen);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, cartDrawerOpen, toggleCartDrawer }}
    >
      {children}
    </CartContext.Provider>
  );
};
