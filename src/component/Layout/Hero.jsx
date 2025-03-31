import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const heroImageUrl = "https://i.pinimg.com/736x/39/1a/ab/391aabb6e71e93d66cecc71b10719c9b.jpg"; 

  return (
    <div
      className="relative w-full h-[600px]  bg-center"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Hero Content */}
      <div className="absolute bottom-10 left-1/2 transform underline -translate-x-1/2 text-white text-center">


        <motion.p
          className="text-sm md:text-lg uppercase poppins tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore Our New Collection
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
