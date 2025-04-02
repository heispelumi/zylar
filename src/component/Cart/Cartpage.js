

import React, { useState } from "react";
import CartDrawer from "./CartDrawer"; // Import CartDrawer component

const CartPage = () => {
  // State to manage cart visibility (open/close)
  const [drawerOpen, setDrawerOpen] = useState(false);

  // State to manage the items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to toggle the cart drawer visibility
  const toggleCartDrawer = () => {
    setDrawerOpen((prev) => !prev); // Toggle between open and closed states
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]); // Add product to the cart
  };

  return (
    <div>
      {/* Button to open cart */}
      <button
        onClick={toggleCartDrawer}
        className="bg-black text-white py-2 px-4 rounded-lg"
      >
        Open Cart
      </button>

      {/* Sample button to add product to cart */}
      <button
        onClick={() =>
          addToCart({
            id: 1,
            name: "Product Name",
            price: 29.99,
            image: "product-image.jpg", // Sample product image URL
          })
        }
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
      >
        Add to Cart
      </button>

      {/* Passing the drawer state and cart items to CartDrawer */}
      <CartDrawer
        drawerOpen={drawerOpen} // Pass drawer visibility state
        toggleCartDrawer={toggleCartDrawer} // Pass function to toggle drawer visibility
        cartItems={cartItems} // Pass cart items to display in the CartDrawer
      />
    </div>
  );
};

export default CartPage;
