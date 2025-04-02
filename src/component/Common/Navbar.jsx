import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useCart } from "../Cart/CartContext";

const Navbar = () => {
  const { cart, toggleCartDrawer } = useCart(); // Access cart and toggleCartDrawer from context
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const shopDropdownRef = useRef(null);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
    setShopDropdownOpen(false);
  };

  const toggleShopDropdown = () => {
    setShopDropdownOpen(!shopDropdownOpen);
  };

  const closeAllMenus = () => {
    setNavDrawerOpen(false);
    setShopDropdownOpen(false);
  };

  // Close shop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shopDropdownRef.current && !shopDropdownRef.current.contains(event.target)) {
        setShopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="container px-4 md:h-[50px] mx-auto flex items-center justify-between py-4 lg:px-[50px] relative">
        <div className="flex text-center justify-center gap-x-3 flex-row">
          <button onClick={toggleNavDrawer} className="flex md:hidden">
            <RiMenu3Line className="h-6 w-6 text-gray-600" />
          </button>
          <h1 className="text-2xl brand">ZYLAR</h1>
        </div>

        <div className="hidden md:flex poppins items-center space-x-6">
          <Link to="/" onClick={closeAllMenus} className="text-gray-700 hover:text-black text-[14px] font-medium">
            Home
          </Link>
          <Link to="/allproducts" onClick={closeAllMenus} className="text-gray-700 hover:text-black text-[14px] font-medium">
            All Products
          </Link>

          <div className="relative" ref={shopDropdownRef}>
            <button
              onClick={toggleShopDropdown}
              className="flex items-center text-gray-700 hover:text-black text-[14px] font-medium focus:outline-none"
            >
              Shop
              {shopDropdownOpen ? <FaMinus className="ml-2 text-xs" /> : <FaPlus className="ml-2 text-xs" />}
            </button>

            <AnimatePresence>
              {shopDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md z-50"
                >
                  <Link to="/allproducts?category=Shirts" onClick={closeAllMenus} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Shirts
                  </Link>
                  <Link to="/allproducts?category=Caps" onClick={closeAllMenus} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Caps
                  </Link>
                  <Link to="/allproducts?category=Hoodies" onClick={closeAllMenus} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Hoodies
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about" onClick={closeAllMenus} className="text-gray-700 hover:text-black text-[14px] font-medium">
            About
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <Link to="/profile">
            <CiUser className="h-6 w-6 hover:text-black text-gray-700" />
          </Link>
          <button onClick={toggleCartDrawer} className="relative hover:text-black text-gray-700">
            <IoBagOutline className="h-6 w-6 hover:text-black text-gray-700" />
            {cart.length > 0 && (
              <span className="absolute bg-black text-white text-[8px] rounded-full px-1 top-[-1px] right-0">
                {cart.length}
              </span>
            )}
          </button>

          <SearchBar />
        </div>
      </nav>

      <CartDrawer cart={cart} toggleCartDrawer={toggleCartDrawer} />

      {navDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeAllMenus}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="p-4">
          <nav className="space-y-4">
            <Link to="/" onClick={closeAllMenus} className="text-gray-700 hover:text-black font-medium">
              Home
            </Link>
            <Link to="/allproducts" onClick={closeAllMenus} className="block text-gray-600 hover:text-black">
              All Products
            </Link>

            <div className="relative">
              <button
                onClick={toggleShopDropdown}
                className="flex items-center justify-between text-gray-700 hover:text-black w-full text-left font-semibold px-4 py-2 rounded-md transition-all duration-300"
              >
                <span className="tracking-wide">Shop</span>
                {shopDropdownOpen ? <FaMinus className="ml-2 text-sm" /> : <FaPlus className="ml-2 text-sm" />}
              </button>

              <AnimatePresence>
                {shopDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="ml-4 space-y-2"
                  >
                    <Link to="/allproducts?category=Shirts" onClick={closeAllMenus} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Shirts
                    </Link>
                    <Link to="/allproducts?category=Caps" onClick={closeAllMenus} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Caps
                    </Link>
                    <Link to="/allproducts?category=Hoodies" onClick={closeAllMenus} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Hoodies
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" onClick={closeAllMenus} className="block text-gray-600 hover:text-black">
              About
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
