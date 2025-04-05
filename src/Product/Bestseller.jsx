import React from "react";

const BestSeller = () => {
  const images = [
    "https://i.pinimg.com/736x/ef/94/f8/ef94f827f5d8bd5992ed3535c6648d54.jpg",
    "https://i.pinimg.com/736x/c2/8e/df/c28edf946ecd65024de0457671709c2a.jpg",

  ];

  return (
    <section className="md:pt-16 pt-8  ">


      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {images.slice(0, 2).map((image, index) => (
          <div key={index} className="w-full h-[320px] md:h-[500px] ">
            <img src={image} alt={`Best Seller ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-0 mt-6">
        {images.slice(2).map((image, index) => (
          <div key={index + 2} className="w-full h-[320px] md:h-[500px]">
            <img src={image} alt={`Best Seller ${index + 3}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
