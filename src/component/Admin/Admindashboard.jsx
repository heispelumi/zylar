import { useState } from "react";

const Admindashboard = () => {
  const [dashboardData] = useState({
    totalOrders: 1500,
    totalProducts: 350,
    totalRevenue: 25000000, // Revenue in Naira
  });

  const [recentOrders] = useState([
    {
      orderId: "#1001",
      customerName: "John Doe",
      email: "johndoe@example.com",
      product: "Nike Air Max",
      quantity: 2,
      totalPrice: 300000,
      status: "Completed",
    },
    {
      orderId: "#1002",
      customerName: "Jane Smith",
      email: "janesmith@example.com",
      product: "Adidas Ultraboost",
      quantity: 1,
      totalPrice: 180000,
      status: "Pending",
    },
    {
      orderId: "#1003",
      customerName: "Mark Johnson",
      email: "markjohnson@example.com",
      product: "Puma RS-X",
      quantity: 3,
      totalPrice: 270000,
      status: "Shipped",
    },
  ]);

  return (
    <div className="p-4 w-full min-h-screen poppins bg-gray-100">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
        Admin Dashboard
      </h1>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-gray-500 text-xs sm:text-sm md:text-base">Total Orders</p>
          <h2 className="text-lg sm:text-xl font-bold">{dashboardData.totalOrders}</h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-gray-500 text-xs sm:text-sm md:text-base">Total Products</p>
          <h2 className="text-lg sm:text-xl font-bold">{dashboardData.totalProducts}</h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-gray-500 text-xs sm:text-sm md:text-base">Total Revenue</p>
          <h2 className="text-lg sm:text-xl font-bold">₦{dashboardData.totalRevenue.toLocaleString()}</h2>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Recent Orders</h2>

        {/*  Fully Responsive Table Wrapper */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse border border-gray-300 text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 md:p-3">Order ID</th>
                <th className="border p-2 md:p-3">Customer</th>
                <th className="border p-2 md:p-3 hidden md:table-cell">Email</th>
                <th className="border p-2 md:p-3">Product</th>
                <th className="border p-2 md:p-3 hidden sm:table-cell">Qty</th>
                <th className="border p-2 md:p-3">Total</th>
                <th className="border p-2 md:p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-2 md:p-3">{order.orderId}</td>
                  <td className="border p-2 md:p-3">{order.customerName}</td>
                  <td className="border p-2 md:p-3 hidden md:table-cell">{order.email}</td>
                  <td className="border p-2 md:p-3">{order.product}</td>
                  <td className="border p-2 md:p-3 hidden sm:table-cell">{order.quantity}</td>
                  <td className="border p-2 md:p-3">₦{order.totalPrice.toLocaleString()}</td>
                  <td className="border p-2 md:p-3">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Admindashboard;
