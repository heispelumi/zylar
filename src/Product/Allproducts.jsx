import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import products from "../component/data/products"; 
import { toast } from "sonner"; // Importing toast from sonner

const AllProducts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category"); 

  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on category and search term
  const filteredProducts = category
    ? products.filter((product) =>
        product.category === category && product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  // Display toast notification when search term changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

  
    if (e.target.value) {
      toast("Showing results for your search...", {
        description: "You can further filter by category.",
        duration: 3000, 
        position: "top-right", 
        style: {
          backgroundColor: "#262126", 
          color: "#fff", // 
          padding: "10px 20px", 
          borderRadius: "5px", 
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
          fontSize: "14px", 
        },
      });
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={handleSearchChange} // Using the new function for handling search
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none flex items-center justify-center w-full mx-auto md:w-1/2"
        />
      </div>

      <h2 className="text-2xl font-bold poppins my-4">{category ? `${category} Collection` : "All Products"}</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
            className="p-4 md:p-6 poppins cursor-pointer"
          >
            <img src={product.image} alt={product.name} className="w-full h-[200px] md:h-[175px] object-cover" />
            <h3 className="mt-2 text-lg poppins font-semibold">{product.name}</h3>
            <p className="text-gray-600 poppins">₦{product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
