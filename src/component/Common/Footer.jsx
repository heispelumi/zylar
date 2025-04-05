import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='px-4 md:px-8'>

      <div className='flex justify-between '>
        {/* Text */}
        <div className=' flex flex-col '>
        <p className='poppins font-bold text-lg' style={{ fontWeight: 'bold' }}>Join the Community</p>

        <p className='poppins py-3 text-[12px]'>You will receive all the information regarding the next drops </p>

        <div className='flex flex-col gap-y-3  md:hidden'>
        <input className='border-b-4 border-black focus:outline-none placeholder-black ' type="email" placeholder='Email Address' />
        <div className='flex items-center w-[140px] gap-x-3 px-4 py-2 bg-black text-white'>
          <p className=' text-white poppins'>Subscribe</p>
          <FaArrowRightLong />
        </div>
       </div>


       
        <div className='pt-[30px] '>
         <p className='poppins '>FOLLOW US</p>
         <div className=' flex items-center gap-x-2 flex-row'>
         <FaWhatsapp size={20} />
         <FaInstagram size={20} />
         </div>
                     {/* Timestamp */}
         <p className='poppins text-[12px] mt-6 mb-2'>&copy; {new Date().getFullYear()},  Zylar</p>
        </div>
        </div>
  
        <div className='md:flex gap-y-3 md:flex-col hidden' >
        <input className='border-b-4 border-black focus:outline-none placeholder-black placeholder-poppins ' type="email" placeholder='Email Address'  />
        <div className='flex items-center w-[140px] gap-x-3 px-4 py-2 bg-black text-white'>
          <p className=' text-white poppins '>Subscribe</p>
          <FaArrowRightLong />
        </div>
       </div>
    
      </div>


    </div>
  )
}

export default Footer
