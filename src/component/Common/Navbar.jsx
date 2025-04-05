import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import SearchBar from "./SearchBar";
import { useCart } from "../Cart/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const shopDropdownRef = useRef(null);

  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);
  const toggleShopDropdown = () => setShopDropdownOpen((prev) => !prev);
  const toggleMobileShop = () => setMobileShopOpen((prev) => !prev);

  const closeAllMenus = () => {
    setNavDrawerOpen(false);
    setShopDropdownOpen(false);
    setMobileShopOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        shopDropdownRef.current &&
        !shopDropdownRef.current.contains(event.target)
      ) {
        setShopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav className="container px-4 md:h-[50px] mx-auto flex items-center justify-between py-4 lg:px-[50px] relative z-50">
        <div className="flex items-center gap-x-3">
          <button onClick={toggleNavDrawer} className="md:hidden">
            <RiMenu3Line className="h-6 w-6 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">ZYLAR</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            onClick={closeAllMenus}
            className="text-gray-700 hover:text-black text-[14px] font-medium"
          >
            Home
          </Link>

          {/* Shop Dropdown */}
          <div className="relative" ref={shopDropdownRef}>
            <button
              onClick={toggleShopDropdown}
              className="flex items-center text-gray-700 hover:text-black text-[14px] font-medium"
            >
              Shop
              {shopDropdownOpen ? (
                <FaMinus className="ml-2 text-xs" />
              ) : (
                <FaPlus className="ml-2 text-xs" />
              )}
            </button>
            <AnimatePresence>
              {shopDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md z-50"
                >
                  {["Shirts", "Caps", "Hoodies"].map((category) => (
                    <Link
                      key={category}
                      to={`/allproducts?category=${category}`}
                      onClick={closeAllMenus}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {category}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/allproducts"
            onClick={closeAllMenus}
            className="text-gray-700 hover:text-black text-[14px] font-medium"
          >
            All Products
          </Link>
          <Link
            to="/about"
            onClick={closeAllMenus}
            className="text-gray-700 hover:text-black text-[14px] font-medium"
          >
            About
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3">
          <Link to="/profile">
            <CiUser className="h-6 w-6 hover:text-black text-gray-700" />
          </Link>

          <Link
            to="/cartcontent"
            className="relative hover:text-black text-gray-700"
          >
            <IoBagOutline className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute bg-black text-white text-[8px] rounded-full px-1 top-[-1px] right-0">
                {cart.length}
              </span>
            )}
          </Link>

          <SearchBar />
        </div>
      </nav>

      {/* Side Drawer Navigation */}
      <AnimatePresence>
        {navDrawerOpen && (
          <motion.div
            className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-50 overflow-y-auto"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-y-3 p-6">
              <button
                onClick={toggleNavDrawer}
                className="absolute top-4 right-4 text-gray-600 text-3xl"
              >
                <IoMdClose />
              </button>

              <Link
                to="/"
                onClick={closeAllMenus}
                className="text-gray-700 hover:text-black text-[16px] font-medium mb-4 mt-10"
              >
                Home
              </Link>

              {/* Mobile Shop Collapsible Dropdown */}
              <div>
                <button
                  onClick={toggleMobileShop}
                  className="flex items-center text-gray-700 hover:text-black text-[16px] font-medium mb-2"
                >
                  Shop
                  {mobileShopOpen ? (
                    <FaMinus className="ml-2 text-xs" />
                  ) : (
                    <FaPlus className="ml-2 text-xs" />
                  )}
                </button>
                <AnimatePresence>
                  {mobileShopOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4"
                    >
                      {["Shirts", "Caps", "Hoodies"].map((category) => (
                        <Link
                          key={category}
                          to={`/allproducts?category=${category}`}
                          onClick={closeAllMenus}
                          className="block py-[10px] px-[50px] text-gray-700  text-sm"
                        >
                          {category}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/allproducts"
                onClick={closeAllMenus}
                className="text-gray-700 hover:text-black text-[16px] font-medium mb-4 mt-2"
              >
                All Products
              </Link>
              <Link
                to="/about"
                onClick={closeAllMenus}
                className="text-gray-700 hover:text-black text-[16px] font-medium"
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
