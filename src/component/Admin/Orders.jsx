import { useState } from "react";
import { FaEye } from "react-icons/fa"; // Import eye icon for the view button

const Orders = () => {
  // Sample order data (Replace with real data from an API)
  const [orders] = useState([
    {
      id: "#1001",
      customer: "John Doe",
      email: "johndoe@example.com",
      status: "Pending",
      total: 120000,
      date: "March 25, 2025",
      payment: "Credit Card",
    },
    {
      id: "#1002",
      customer: "Jane Smith",
      email: "janesmith@example.com",
      status: "Completed",
      total: 75500,
      date: "March 24, 2025",
      payment: "Paystack",
    },
    {
      id: "#1003",
      customer: "Mark Johnson",
      email: "markjohnson@example.com",
      status: "Shipped",
      total: 200000,
      date: "March 23, 2025",
      payment: "Bank Transfer",
    },
  ]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Orders</h1>

      <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="border p-3">Order ID</th>
            <th className="border p-3">Customer</th>
            <th className="border p-3 hidden md:table-cell">Email</th>
            <th className="border p-3 hidden md:table-cell">Order Date</th>
            <th className="border p-3">Status</th>
            <th className="border p-3 hidden md:table-cell">Payment Method</th>
            <th className="border p-3">Total</th>
         
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center hover:bg-gray-50">
              <td className="border p-3">{order.id}</td>
              <td className="border p-3">{order.customer}</td>
              <td className="border p-3 hidden md:table-cell">{order.email}</td>
              <td className="border p-3 hidden md:table-cell">{order.date}</td>
              <td
                className={`border p-3 font-semibold ${
                  order.status === "Pending"
                    ? "text-black"
                    : order.status === "Completed"
                    ? "text-black"
                    : "text-black"
                }`}
              >
                {order.status}
              </td>
              <td className="border p-3 hidden md:table-cell">{order.payment}</td>
              <td className="border p-3">₦{order.total.toLocaleString()}</td>
         
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
