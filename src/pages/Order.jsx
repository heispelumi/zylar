import React, { useState } from "react";

const Order = () => {
  // Order data
  const [orders, setOrders] = useState([
    {
      id: "ZY001",
      createdAt: "March 20, 2025, 2:45 PM",
      items: [
        {
          name: "Galaxy Hoodie",
          price: 89.99,
          quantity: 2,
          image: "https://i.pinimg.com/736x/ef/94/f8/ef94f827f5d8bd5992ed3535c6648d54.jpg",
        },
        {
          name: "Spacecraft Beanie",
          price: 24.99,
          quantity: 1,
          image: "https://i.pinimg.com/736x/ef/94/f8/ef94f827f5d8bd5992ed3535c6648d54.jpg",
        },
      ],
      status: "Delivered",
    },
    {
      id: "ZY002",
      createdAt: "March 18, 2025, 10:30 AM",
      items: [
        {
          name: "Futuristic Jacket",
          price: 129.99,
          quantity: 1,
          image: "https://i.pinimg.com/736x/ef/94/f8/ef94f827f5d8bd5992ed3535c6648d54.jpg",
        },
      ],
      status: "Shipped",
    },
    {
      id: "ZY003",
      createdAt: "March 22, 2025, 5:15 PM",
      items: [
        {
          name: "Astronaut Tee",
          price: 39.99,
          quantity: 3,
          image: "https://i.pinimg.com/736x/ef/94/f8/ef94f827f5d8bd5992ed3535c6648d54.jpg",
        },
      ],
      status: "Pending",
    },
  ]);

  return (
    <div className="min-h-screen  px-4  pt-[30px] pb-[50px] md:px-0">
      <h1 className="text-2xl font-bold text-center poppins mb-6">Order History</h1>
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-xl">
        {orders.map((order) => (
          <div key={order.id} className="border-b pb-6 mb-6 last:border-none last:pb-0">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Order #{order.id}</h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Shipped"
                    ? "bg-blue-100 text-blue-700"
                    : order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {order.status}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-4">Created on {order.createdAt}</p>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="text-md font-medium">{item.name}</h3>
                    <p className="text-gray-700">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center">
                    <button className="px-3 py-1 bg-black text-white rounded-full text-md font-medium cursor-default">
                      {item.quantity}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
