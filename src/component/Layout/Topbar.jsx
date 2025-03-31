import React from 'react';

const Topbar = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      <div className="w-full h-[30px] flex items-center">
        <div className="whitespace-nowrap animate-marquee text-sm">
          We offer fast and reliable worldwide delivery!
        </div>
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: inline-block;
            animation: marquee 20s linear infinite;
            min-width: 100vw; /* Ensures text moves fully across */
          }
        `}
      </style>
    </div>
  );
};

export default Topbar;
