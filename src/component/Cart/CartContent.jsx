import React from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri';

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      color: "Black",
      size: "M",
      quantity: 1,
      price: 120,
      image: "https://i.pinimg.com/474x/1a/11/c5/1a11c5823d0c32e806bb03796d7c2f9c.jpg",
    },
    {
      productId: 2,
      name: "Jeans",
      color: "Blue",
      size: "L",
      quantity: 1,
      price: 80,
      image: "https://i.pinimg.com/474x/48/02/d9/4802d9826c1538076b65e0118c7931d6.jpg",
    },
  ];

  return (
    <div className="p-4">
      {cartProducts.map((product) => (
        <div key={product.productId} className="flex items-center justify-between py-4 border-b">
          {/* Product Image */}
          <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />

          {/* Product Details */}
          <div className="flex flex-col flex-grow ml-4">
            <h2 className="lg:text-[15px] font-semibold">{product.name}</h2>
            <p className="text-[10px] text-gray-400">Size: {product.size} | Color: {product.color}</p>

            {/* Quantity Controls */}
            <div className="flex items-center mt-2">
              <button className="border rounded px-[4px] py-[1px] text-[12px] font-medium">-</button>
              <span className="mx-2 text-[12px]  ">{product.quantity}</span>
              <button className="border rounded px-[4px] py-[1px] text-[12px] font-medium">+</button>
            </div>
          </div>

          {/* Price & Delete Button */}
          <div className="flex items-center mb-[20px] flex-col ">
            <p className="text-[12px] font-medium">${product.price.toLocaleString()}</p> 
            <button>
              <RiDeleteBin3Line className="h-5 w-5 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
