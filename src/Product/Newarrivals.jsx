import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Newarrivals = () => {
  const scrollRef = useRef(null); // Reference for scrolling container

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scroll distance
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const newArrivals = [
    {
      _id: "1",
      name: "zylar original crop top ",
      price: 45,
      images: [{ url: "https://i.pinimg.com/474x/01/4b/20/014b20c80fcb82aaec2838075ac60a6a.jpg", altText: "Women's Round Neck T-Shirt" }],
    },
    {
      _id: "2",
      name: "zylar streetwear Neck Tee",
      price: 40,
      images: [{ url:"https://i.pinimg.com/474x/18/d7/1e/18d71e1c3ad9f9a41ff4783d6b2f1b22.jpg"  , altText: "Classic Round Neck Tee" }],
    },
    {
      _id: "3",
      name: "Streetwear Cap",
      price: 40,
      images: [{ url: "https://i.pinimg.com/474x/74/0c/d8/740cd8d9bcc1d19141e1cb65d3e77863.jpg", altText: "Streetwear Cap" }],
    },
    {
      _id: "4",
      name: "Oversized Hoodie",
      price: 140,
      images: [{ url: "https://i.pinimg.com/474x/e3/de/06/e3de061dfcbf8dfcd4cab07e2ef67538.jpg", altText: "Oversized Hoodie" }],
    },
    {
      _id: "5",
      name: "Premium Cotton Round Neck",
      price: 80,
      images: [{ url: "https://i.pinimg.com/736x/71/31/97/7131974b2e5847c23c6103ce6d719f06.jpg", altText: "Premium Cotton Round Neck" }],
    },
    {
      _id: "6",
      name: "Future Youth the Hoodie",
      price: 100,
      images: [{ url: "https://i.pinimg.com/474x/66/05/eb/6605ebf43e7957475c38fe21e2355dbf.jpg", altText: "Heavyweight Pullover Hoodie" }],
    },
    {
      _id: "7",
      name: "Athletic Tank Top",
      price: 65,
      images: [{ url: "https://i.pinimg.com/474x/12/fe/38/12fe38c894ddd7948f8a8177815c9157.jpg", altText: "Athletic Tank Top" }],
    },
  ];
  
  

  return (
    <section className="container mx-auto mb-[70px] md:mb-[70px]">
      {/* Heading */}
      <div className="text-center mb-[40px] relative">

        <div className="mb-5 ">

        <h1 className="text-[20px] poppins md:text-[33px] font-bold mb-4">Explore Our New Arrivals</h1>
        <p className=" text-[10px] poppins md:text-[15px] text-center  px-4 pb-6 w-full text-gray-600 mb-8">
          Stay ahead of the trends with our latest collections—new styles curated to elevate your wardrobe.
        </p>
        </div>

        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-30px] px-4 flex space-x-2">
          <button onClick={() => scroll("left")} className="p-2 rounded border bg-white text-black">
            <FiChevronLeft className="text-2xl" />
          </button>
          <button onClick={() => scroll("right")} className="p-2 rounded border bg-white text-black">
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div ref={scrollRef} className="overflow-x-scroll whitespace-nowrap flex space-x-3 backdrop-blur-md scrollbar-hide px-3 scroll-smooth">
        {newArrivals.map((product) => (
          <div key={product._id} className="relative min-w-[300px] min-h-[300px]">
            {/* Product Image */}
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full  h-full object-cover"
            />

            {/* Overlay with Product Details */}
            <div className="absolute bottom-0  left-0 right-0 bg-black bg-opacity-50  text-white p-3 ">

              <Link to="#" className="block ">
                <h4 className=" poppins font-bold  ">{product.name}</h4>
                <p className="mt-1 poppins">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Newarrivals;
