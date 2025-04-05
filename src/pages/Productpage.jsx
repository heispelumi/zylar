// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useCart } from "../component/Cart/CartContext";

// const Productpage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { addToCart } = useCart(); // Access addToCart from context
//   const product = location.state?.product;

//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     navigate("/");
//     return <p>Product not found</p>;
//   }

//   const handleSizeSelect = (size) => setSelectedSize(size);
//   const increaseQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);
//   const decreaseQuantity = () => setQuantity((prevQuantity) => prevQuantity - 1);

//   const handleAddToCart = () => {
//     if (!selectedSize) {
//       alert("Please select a size");
//       return;
//     }

//     const productToAdd = { ...product, size: selectedSize, quantity };
//     addToCart(productToAdd); // Add product to cart
//   };

//   const productImage = product?.image || "/path/to/default-image.jpg";

//   return (
//     <section className="py-16 poppins px-4 lg:px-[150px] flex flex-col md:flex-row items-center">
//       <div className="w-full md:w-1/2 flex justify-center">
//         <img src={productImage} alt={product?.name} className="max-w-[400px] w-full h-auto" />
//       </div>

//       <div className="w-full md:w-1/2 px-6">
//         <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
//         <p className="text-xl font-semibold text-gray-700">₦{product?.price?.toLocaleString()}</p>

//         <div className="mt-6">
//           <p className="text-lg font-semibold mb-2">Size:</p>
//           <div className="flex gap-3">
//             {["M", "L", "XL"].map((size) => (
//               <button
//                 key={size}
//                 className={`border px-4 py-2 hover:bg-black hover:text-white transition ${selectedSize === size ? "bg-black text-white" : ""}`}
//                 onClick={() => handleSizeSelect(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="mt-6">
//           <p className="text-lg font-semibold mb-2">Quantity:</p>
//           <div className="flex items-center">
//             <button className="border px-3 py-1" onClick={decreaseQuantity}>-</button>
//             <span className="px-4">{quantity}</span>
//             <button className="border px-3 py-1" onClick={increaseQuantity}>+</button>
//           </div>
//         </div>

//         <div className="mt-8 flex gap-4">
//           <button className="border md:px-6 md:py-3 w-full" onClick={handleAddToCart}>
//             Add to Cart
//           </button>
//           <button className="bg-black text-white px-2 py-2 md:px-6 md:py-3 w-full" onClick={() => navigate("/checkout")}>
//             Buy it Now
//           </button>
//         </div>

//         {/* Add a small text below to inform the user */}
//         <p className="text-[10px] text-gray-500 mt-6">
//           *Add product to the cart before proceeding to buy .
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Productpage;
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../component/Cart/CartContext";
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast

const Productpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Access addToCart from context
  const product = location.state?.product;

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    navigate("/");
    return <p>Product not found</p>;
  }

  const handleSizeSelect = (size) => setSelectedSize(size);
  const increaseQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decreaseQuantity = () => setQuantity((prevQuantity) => prevQuantity - 1);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart!"); // Show error toast
      return;
    }

    const productToAdd = { ...product, size: selectedSize, quantity };
    addToCart(productToAdd); // Add product to cart
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast.error("Please select a size before proceeding to buy!"); // Show error toast
      return;
    }
    navigate("/checkout");
  };

  const productImage = product?.image || "/path/to/default-image.jpg";

  return (
    <section className="py-16 poppins px-4 lg:px-[150px] flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={productImage} alt={product?.name} className="max-w-[400px] w-full h-auto" />
      </div>

      <div className="w-full md:w-1/2 px-6">
        <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
        <p className="text-xl font-semibold text-gray-700">₦{product?.price?.toLocaleString()}</p>

        <div className="mt-6">
          <p className="text-lg font-semibold mb-2">Size:</p>
          <div className="flex gap-3">
            {["M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`border px-4 py-2 hover:bg-black hover:text-white transition ${selectedSize === size ? "bg-black text-white" : ""}`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-lg font-semibold mb-2">Quantity:</p>
          <div className="flex items-center">
            <button className="border px-3 py-1" onClick={decreaseQuantity}>-</button>
            <span className="px-4">{quantity}</span>
            <button className="border px-3 py-1" onClick={increaseQuantity}>+</button>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="border md:px-6 md:py-3 w-full" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="bg-black text-white px-2 py-2 md:px-6 md:py-3 w-full" onClick={handleBuyNow}>
            Buy it Now
          </button>
        </div>

        {/* Add a small text below to inform the user */}
        <p className="text-[10px] text-gray-500 mt-6">
          *Add product to the cart before proceeding to buy.
        </p>
      </div>

      {/* Toast Container to display alerts */}
      <ToastContainer  position="top-center" autoClose={5000} hideProgressBar={false} />
    </section>
  );
};

export default Productpage;
