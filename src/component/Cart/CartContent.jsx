import React, { useState } from "react";
import { useCart } from "../Cart/CartContext";
import { Link } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";

const CartContent = () => {
  const { cart, removeFromCart, addToCart } = useCart(); // Get addToCart to update quantities
  const [selectedSize, setSelectedSize] = useState(""); // If needed for size selection

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const itemPrice = item?.price || 0;
      const itemQuantity = item?.quantity || 0;
      return total + itemQuantity * itemPrice;
    }, 0);
  };

  const handleSizeSelect = (size) => setSelectedSize(size);

  // Function to increase the quantity of an item in the cart
  const increaseQuantity = (item) => {
    addToCart({ ...item, quantity: 1 }); // Update quantity of existing item
  };

  // Function to decrease the quantity of an item in the cart
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: -1 }); // Decrease quantity of existing item
    }
  };

  return (
    <div className="p-6 pb-[250px] md:pb-[120px] mx-auto bg-white">
      <h2 className="text-[50px] font-semibold poppins text-gray-800 border-b pb-3">Your Cart</h2>

      {/* Cart item count at the top left */}
      <div className="text-lg poppins font-semibold text-gray-800 mt-4">
        <p>
          {cart.length} {cart.length === 1 ? "Item" : "Items"} in your cart
        </p>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-500 mt-6 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-4 mt-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-100 rounded-md shadow-sm">
              <div className="relative">
                {/* Product Image */}
                <img
                  src={item?.image || "/placeholder.png"}
                  alt={item?.name || "Product"}
                  className="w-16 h-16 object-cover rounded-md"
                />
                {/* Item Quantity */}
                <span className="absolute top-0 right-0 bg-black text-white text-xs font-semibold py-1 px-2 rounded-full">
                  {item?.quantity}
                </span>
              </div>

              <div className="flex-1 ml-4">
                <p className="font-medium text-[12px] text-gray-800">{item?.name}</p>
                {/* Displaying selected size */}
                <p className="text-[8px] text-gray-600">Size: {item?.size}</p>
                
                {/* Item quantity section moved under size */}
                <div className="flex items-center mt-2">
                  <div className="flex items-center ">
                    <button className=" py-1" onClick={() => decreaseQuantity(item)}>-</button>
                    <span className=" text-[10px] px-2">{item?.quantity}</span>
                    <button className=" py-1" onClick={() => increaseQuantity(item)}>+</button>
                  </div>
                </div>

                {/* Displaying price for each item */}
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600">₦{item?.price?.toLocaleString()}</span>
                  <span className="text-sm text-gray-600">
                    Total: ₦{(item?.quantity * item?.price)?.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-black"
              >
                <FaRegTrashCan className="h-5 w-5" />
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="border-t ">
            <div className="flex justify-between items-center text-lg font-semibold mb-4">
              <span>Total:</span>
              <div className="mt-8 space-y-3">

                <span>₦{calculateTotal().toLocaleString()}</span>

                {/* Checkout Button */}
                <div className="flex justify-center  ">
                  <Link
                    to="/checkout"
                    className="block hover:bg-orange-500 text-center text-[15px] bg-black text-white font-medium py-2 px-6 poppins hover:bg-gray-800 transition"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>

            {/* Shipping, taxes, and discount info */}
            <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
              Shipping, taxes, and discount codes calculated at checkout
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContent;
