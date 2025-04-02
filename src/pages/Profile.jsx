
import React from "react";
import { FaRegUser, FaShoppingBag, FaHeadset, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-900 py-12 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 border-b pb-4 mb-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
            <FaRegUser size={30} />
          </div>
          <div>
            <h2 className="text-xl font-bold">Welcome, Pelumi Philips</h2>
            <p className="text-gray-500 text-sm">Member since: Jan 2024</p>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-3">
              <FaShoppingBag className="text-black" size={20} />
              <h1 className="text-sm font-medium">Order History</h1>
            </div>
            <Link to="/order" className="text-black text-sm font-medium hover:underline">View</Link>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-3">
              <FaHeadset className="text-black" size={20} />
              <span className="text-sm font-medium">Support / Help Center</span>
            </div>
            <Link to="/helpcenter" className="text-black text-sm font-medium hover:underline">Get Help</Link>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-6">
          <button className="w-full flex items-center justify-center space-x-2 py-3 bg-black text-white rounded-lg font-semibold">
            <FaSignOutAlt />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
