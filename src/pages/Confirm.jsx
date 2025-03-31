import React from "react";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
  const navigate = useNavigate();

  // Mock Order Data (Replace with real data)
  const orderDetails = {
    orderId: "SPC-20250324-001",
    estimatedDelivery: "March 30, 2025",
    paymentMethod: "Paystack",
    deliveryAddress: "123 Space Avenue, Lagos, Nigeria",
    items: [
      {
        id: 1,
        name: "Spacecraft Hoodie",
        quantity: 2,
        price: 49.99,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 2,
        name: "Futuristic T-Shirt",
        quantity: 1,
        price: 29.99,
        image: "https://via.placeholder.com/100",
      },
    ],
  };

  // Calculate Total Price
  const totalAmount = orderDetails.items.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center py-12 px-6 sm:px-12">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-green-600">Order Confirmed ✅</h2>
        <p className="text-gray-600 mt-2">Thank you for your purchase!</p>

        {/* Order Details */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg text-left">
          <p className="text-lg font-semibold">Order ID: {orderDetails.orderId}</p>
          <p className="text-sm text-gray-700 mt-1">Estimated Delivery: {orderDetails.estimatedDelivery}</p>
          <p className="text-sm text-gray-700">Payment Method: {orderDetails.paymentMethod}</p>
          <p className="text-sm text-gray-700">Delivery Address: {orderDetails.deliveryAddress}</p>
        </div>

        {/* Items Ordered */}
        <div className="mt-6 text-left">
          <h3 className="text-lg font-semibold border-b pb-2 mb-3">Items Ordered</h3>
          <div className="space-y-4">
            {orderDetails.items.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg"
                  />
                  <div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-gray-600">Quantity: {product.quantity}</p>
                    <p className="text-xs text-gray-600">Price: ${product.price.toFixed(2)}</p>
                  </div>
                </div>
                <p className="text-sm font-medium">${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Total Amount */}
        <div className="mt-6 text-lg font-semibold">Total: ${totalAmount.toFixed(2)}</div>

        {/* Return to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Return to Home
        </button>
      </div>
    </section>
  );
};

export default Confirm;
