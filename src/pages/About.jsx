import React from "react";

const About = () => {
  return (

    <section className="pb-7">
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
      <div className="relative flex flex-col-reverse md:flex-row items-center">
        <div className="p-8 md:p-16 flex flex-col justify-center md:w-2/2 lg:w-1/2 text-center md:text-left">
          <h1 className="text-[20px] md:text-[28px] lg:text-[48px]  font-bold tracking-wide">ZYLAR: EFFORTLESS STYLE</h1>
          <p className="mt-2 md:mt-4 text-[8px] md:text-[12px] poppins leading-relaxed">
          Zylar is a unisex streetwear brand that fuses modern aesthetics with effortless comfort, delivering bold yet versatile pieces for everyday confidence.
          </p>
        </div>
        <img
          src="https://i.pinimg.com/474x/f4/71/69/f47169bb5dd0eedfb503152c6a52932e.jpg"
          alt="Zylar Streetwear"
          className="w-full md:w-1/2 lg:w-2/2 h-[330px] md:h-[630px] object-cover"
        />
      </div>

      {/* Statement Section */}
      <div className=" p-4 md:p-8 bg-gray-100 text-center">
        <h2 className=" text-[13px] pb-1 md:pb-0 md:text-[25px] font-semibold">MODERN, BOLD, VERSATILE</h2>
        <p className="text-[8px] md:text-[15px] max-w-3xl poppins mx-auto leading-relaxed">
        Crafted for individuality—elevated essentials with bold details with street-edge .
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-3 md:gap-6 ">
        <div className="relative">
          <img
            src="https://i.pinimg.com/736x/f7/61/e6/f761e662ad9e20053da92a85c73293e2.jpg"
            alt="Zylar Collection"
            className="w-full md:w-2/2 h-[330px] md:h-[630px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center  text-center md:w-2/2 md:text-left pt-[23px] p-8 md:p-16 ">
          <h3 className="text-[20px] md:text-[28px] lg:text-[48px]  font-bold tracking-wide">STREET MEETS MINIMALISM</h3>
          <p className="mt-2 md:mt-4 text-[8px] md:text-[12px] poppins leading-relaxed">
          Versatile fashion for every moment—sleek neutrals, standout details, and all-day comfort.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black p-4 md:p-8  text-white text-center ">
        <h2 className="text-[13px] pb-1 md:pb-0 md:text-[25px] font-semibold">JOIN THE MOVEMENT</h2>
        <p className="text-[8px] md:text-[15px] max-w-3xl poppins mx-auto leading-relaxed">
          Zylar is for the bold and confident. Redefine streetwear with us.
        </p>
      
      </div>
    </div>
    </section>
  );
};

export default About;
