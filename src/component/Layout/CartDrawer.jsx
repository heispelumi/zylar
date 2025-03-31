import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full sm:w-1/2 md:w-[28rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button  */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Cart Content  */}
      <div className="flex-grow p-4 overflow-y-auto ">
        <h1 className="text-xl font-semibold mb-4  ">
        Your Cart
        </h1>
        <CartContent/>
      </div>
      

      {/* Checkout Component */}
       <div className="p-4  bg-white bottom-0 ">
        <button className="w-full bg-black text-white  py-3  rounded-lg  font-semibold  hover:bg-gray-800 transition  ">
            Checkout
        </button>
        <p className="text-sm  tracking-tighter text-gray-500 mt-2 text-center   ">Shipping, taxes, and discount codes calculated at checkpoint  </p>
       </div>
    </div>
  );
};

export default CartDrawer;
