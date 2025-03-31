import React from "react";
import { useParams, useLocation } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const location = useLocation();
  const product = location.state?.product; // Get product data passed from previous page

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section className="py-16 px-4 lg:px-[150px] flex flex-col md:flex-row items-center">
      {/* Product Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-[400px] w-full h-auto "
        />
      </div>

      {/* Product Info */}
      <div className="w-full md:w-1/2 px-6">
        <h1 className="text-3xl font-bold poppins mb-4">{product.name}</h1>
        <p className="text-xl poppins font-semibold text-gray-700">₦{product.price.toLocaleString()}</p>

        {/* Size Selection */}
        <div className="mt-6">
          <p className="text-lg font-semibold mb-2">Size:</p>
          <div className="flex gap-3">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="border px-4 py-2  hover:bg-black hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mt-6">
          <p className="text-lg poppins font-semibold mb-2">Quantity:</p>
          <div className="flex items-center">
            <button className="border px-3 py-1">-</button>
            <span className="px-4">1</span>
            <button className="border px-3 py-1">+</button>
          </div>
        </div>

        {/* Add to Cart & Buy Now Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="border md:px-6 poppins md:py-3 w-full ">Add to Cart </button>
          <button className="bg-black poppins text-white px-2 py-2  md:px-6 md:py-3 w-full ">Buy it Now </button>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
