import React, { useState } from "react";
import { toast } from "sonner";

const Bestseller = () => {
  const mainImage =
    "https://i.pinimg.com/474x/3c/b7/91/3cb791d64e31db3eeb339e767cb2b232.jpg";

  const selectedProduct = {
    name: "CTG Jersey",
    tagline: "Crafted for the Game",
    price: 180,
    originalPrice: 220,
    description:
      "A stylish and comfortable fashion jersey designed for everyday wear.",
    brand: "Spacecraft",
    material: "Premium Cotton Blend",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White"],
    images: [
      {
        url: "https://i.pinimg.com/736x/cf/6a/9a/cf6a9a64e162ea8ece4075e382cfae59.jpg",
        altText: "CTG Jersey - Black",
      },
      {
        url: "https://i.pinimg.com/474x/d0/68/ad/d068adb80d65d00e44dfd437e1179c7d.jpg",
        altText: "CTG Jersey - White",
      },
    ],
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and a color before adding to cart.", {
        duration: 2000,
      });
      return;
    }

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success(`Added ${quantity} item(s) to cart!`, {
        duration: 2000,
      });
      setIsButtonDisabled(false);
    }, 1000);
  };

  return (
    <div className="">
      <h1 className="text-center text-[30px] poppins md:text-[33px] font-bold mb-4">
        Best Seller
      </h1>

      <div className="bg-white py-6 rounded-lg flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Mobile: Product Info on Top */}
        <div className="md:hidden text-center px-4">
          <h2 className="text-xl font-semibold">{selectedProduct.name}</h2>
          <p className="text-gray-500 text-base italic">
            {selectedProduct.tagline}
          </p>
          <p className="text-gray-600 mt-2">{selectedProduct.description}</p>

          <p className="mt-3">
            <span className="text-lg font-bold">${selectedProduct.price}</span>
            <span className="text-gray-500 line-through ml-2">
              ${selectedProduct.originalPrice}
            </span>
          </p>

          {/* Sizes Section */}
          <div className="mt-4">
            <p className="text-sm font-medium">Sizes:</p>
            <div className="flex justify-center gap-2 mt-2">
              {selectedProduct.sizes.map((size, index) => (
                <span
                  key={index}
                  className={`border px-4 py-2 rounded-lg cursor-pointer transition-all ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Colors Section */}
          <div className="mt-4">
            <p className="text-sm font-medium">Colors:</p>
            <div className="flex justify-center gap-2 mt-2">
              {selectedProduct.colors.map((color, index) => (
                <span
                  key={index}
                  className={`border px-4 py-2 rounded-lg cursor-pointer transition-all ${
                    selectedColor === color
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4 flex justify-center items-center gap-4">
            <button
              className="bg-gray-200 px-4 py-2 rounded-lg"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              className="bg-gray-200 px-4 py-2 rounded-lg"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isButtonDisabled}
            className={`mt-4 w-full bg-black text-white poppins py-3 rounded-lg text-sm font-semibold transition-all ${
              isButtonDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
            }`}
          >
            {isButtonDisabled ? "Adding..." : "Add to Cart"}
          </button>
        </div>

        {/* Product Image */}
        <div className="w-full md:w-[50%] lg:w-[55%] mx-auto md:mx-0">
          <img
            src={mainImage}
            alt="Main Product"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Desktop: Product Info on Right */}
        <div className="hidden md:block w-full md:w-[50%] lg:w-[25%] text-left mx-auto md:mx-0 px-4 md:px-0">
          <h2 className="text-2xl font-semibold">{selectedProduct.name}</h2>
          <p className="text-gray-500 text-base italic">
            {selectedProduct.tagline}
          </p>
          <p className="text-gray-600 poppins mt-2">{selectedProduct.description}</p>

          <p className="mt-3">
            <span className="text-lg font-bold">${selectedProduct.price}</span>
            <span className="text-gray-500 line-through ml-2">
              ${selectedProduct.originalPrice}
            </span>
          </p>

          {/* Sizes Section */}
          <div className="mt-4">
            <p className="text-sm poppins ">Sizes:</p>
            <div className="flex space-x-2 mt-2">
              {selectedProduct.sizes.map((size, index) => (
                <span
                  key={index}
                  className={`border px-4 py-2 rounded-lg cursor-pointer transition-all ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Colors Section */}
          <div className="mt-4">
            <p className="text-sm poppins ">Colors:</p>
            <div className="flex space-x-2 mt-2">
              {selectedProduct.colors.map((color, index) => (
                <span
                  key={index}
                  className={`border px-4 py-2 rounded-lg cursor-pointer transition-all ${
                    selectedColor === color
                      ? "bg-black text-white poppins"
                      : "hover:bg-gray-100 poppins"
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4 flex space-x-4 items-center">
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="border-gray-200 border px-4 py-2 ">-</button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="border-gray-200 border px-4 py-2 ">+</button>
          </div>

          <button onClick={handleAddToCart} className="mt-6 w-full bg-black poppins text-white py-3 ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
