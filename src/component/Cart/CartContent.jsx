import React from "react";
import { useCart } from "./CartContext";

const CartContent = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || 0;
      return total + itemQuantity * itemPrice;
    }, 0);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm">
              <img
                src={item.image || "/placeholder.png"}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1 ml-3">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">
                  {item.quantity} × ₦{item.price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-lg font-semibold text-right mt-4">
            Total: ₦{calculateTotal().toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContent;
