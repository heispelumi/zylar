import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import products from "../component/data/products"; 

const AllProducts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category"); 

  // Filter products based on category
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products; 

  return (
    <div className="container mx-auto p-6">
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
