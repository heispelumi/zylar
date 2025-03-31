import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaBars, FaTimes, FaClipboardList, FaUsers, FaTachometerAlt, FaBox } from "react-icons/fa";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white p-6 transition-transform duration-300 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0 md:w-60 lg:w-64 z-50`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <button className="md:hidden text-2xl" onClick={() => setIsSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <nav className="space-y-4">
          <Link to="/adminlayout/admindashboard" className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-700">
            <FaTachometerAlt /> <span>Dashboard</span>
          </Link>
          <Link to="/adminlayout/orders" className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-700">
            <FaClipboardList /> <span>Orders</span>
          </Link>
          <Link to="/adminlayout/products" className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-700">
            <FaBox /> <span>Products</span>
          </Link>
          <Link to="/adminlayout/users" className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-700">
            <FaUsers /> <span>Users</span>
          </Link>
        </nav>
      </aside>

      {/* Content Area */}
      <div className="flex flex-col flex-1 transition-all duration-300 md:ml-60 lg:ml-64">
        {/* Topbar (Mobile) */}
        <div className="md:hidden flex items-center justify-between bg-white p-4 shadow-md">
          <button className="text-2xl" onClick={() => setIsSidebarOpen(true)}>
            <FaBars />
          </button>
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>

        {/* Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
