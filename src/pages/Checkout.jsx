import React, { useState } from "react";
import Paystack from "../component/Cart/Paystack";
import { useCart } from "../component/Cart/CartContext";
import { Link } from "react-router-dom";
import {  FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Checkout = () => {
  const { cart } = useCart(); // Access the cart directly from the context

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "Lagos",
    phone: "",
  });

  const shippingCost = 1000;
  const tax = 3000;

  // Calculate total amount by summing up the cart items
  const totalAmount =
    (Array.isArray(cart)
      ? cart.reduce((sum, product) => sum + product.price * product.quantity, 0)
      : 0) +
    shippingCost +
    tax;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log("Cart Items:", cart); // Debugging check

  return (
    <div className="min-h-screen pb-[400px] bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900 p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form Section */}
        <div className="bg-white  p-6">
          <h1 className="text-3xl pb-6 font-bold brand">ZYLAR</h1>

          {/* Contact Info */}
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <input
            type="email"
            name="email"
            placeholder="Email or phone number"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 focus:outline-none border rounded-lg mb-4"
          />

          <div className="mb-2">
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                name="emailOffers"
                checked={formData.emailOffers}
                onChange={(e) =>
                  setFormData({ ...formData, emailOffers: e.target.checked })
                }
                className="mr-2"
              />
              Email me with news and offers
            </label>
          </div>

          {/* Delivery Section */}
          <h3 className="text-lg font-semibold mb-2">Delivery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name (optional)"
              className="w-full px-4 py-2 focus:outline-none border rounded-lg"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="w-full px-4 py-2 focus:outline-none border rounded-lg"
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="w-full px-4 py-2 focus:outline-none border rounded-lg mb-4"
          />
          <input
            type="text"
            name="apartment"
            placeholder="Apartment, suite, etc. (optional)"
            className="w-full px-4 py-2 focus:outline-none border rounded-lg mb-4"
          />

          <div className="grid grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-full px-4 py-2 focus:outline-none border rounded-lg"
            />
            <select
              name="state"
              className="w-full px-4 py-2 border rounded-lg appearance-none bg-white text-gray-900"
              value={formData.state}
              onChange={handleChange}
              style={{
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gray"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1.5em",
                paddingRight: "2rem",
              }}
            >
              <option value="Abia">Abia</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Anambra">Anambra</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Cross River">Cross River</option>
              <option value="Delta">Delta</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Enugu">Enugu</option>
              <option value="Gombe">Gombe</option>
              <option value="Imo">Imo</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kogi">Kogi</option>
              <option value="Kwara">Kwara</option>
              <option value="Lagos">Lagos</option>
              <option value="Nasarawa">Nasarawa</option>
              <option value="Niger">Niger</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Plateau">Plateau</option>
              <option value="Rivers">Rivers</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
              <option value="FCT">Federal Capital Territory (FCT)</option>
            </select>

            <input
              type="text"
              name="postalCode"
              placeholder="Postal code (optional)"
              className="w-full px-4 py-2 focus:outline-none border rounded-lg"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full px-4 focus:outline-none py-2 border rounded-lg mb-4"
          />
          <label className="flex items-center text-sm text-gray-700">
            <input
              type="checkbox"
              name="billingSameAsShipping"
              checked={formData.billingSameAsShipping}
              onChange={handleChange}
              className="mr-2"
            />
            Save this information for next time
          </label>
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-bold border-b pb-3 mb-4 flex items-center justify-between">
            Order Summary
            <span className="bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {cart.length} {cart.length === 1 ? "Item" : "Items"}
            </span>
          </h2>

          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between mb-3">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image} // Display the product image
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <p>
                    {item.name}{" "}
                    <span className="text-gray-500 text-[9px]">x{item.quantity}</span>
                  </p>
                </div>
                <span className="mt-5">₦{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>

          <div className="border-t pt-4 mt-4 space-y-2">
            <p className="flex justify-between">
              <span>Shipping</span>
              <span>₦{shippingCost}</span>
            </p>
            <p className="flex justify-between">
              <span>Tax</span>
              <span>₦{tax}</span>
            </p>

            <motion.p
              className="font-bold flex justify-between pt-4 text-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span>Total</span>
              <span>₦{totalAmount}</span>
            </motion.p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Payment</h3>
          <p className="text-sm mt-8 text-gray-600 mb-3">
            All transactions are secure and encrypted.
          </p>

          <div className="border p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Paystack</span>
              <div className="flex items-center space-x-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                  className="h-3"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  className="h-3"
                />
                <span className="text-xs text-gray-500">+3</span>
              </div>
            </div>
          </div>

          {/* Paystack Payment Button */}
          <Paystack email={formData.email} amount={totalAmount} />
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
