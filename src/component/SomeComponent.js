import React from "react";
import { useCart } from "./CartContext"; // Import useCart hook

const SomeComponent = () => {
  const { addToCart, cart } = useCart();

  const testProduct = {
    id: 1,
    name: "Test Product",
    price: 5000,
    image: "https://via.placeholder.com/150",
    quantity: 1,
  };

  console.log("Current cart:", cart); // Debug log

  return (
    <div>
      <h1>Test Cart</h1>
      <button onClick={() => addToCart(testProduct)}>Add to Cart</button>
    </div>
  );
};

export default SomeComponent;
