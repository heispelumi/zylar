import React, { useState } from "react";
import Paystack from "../component/Cart/Paystack";

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "Lagos",
    postalCode: "",
    phone: "",
    billingSameAsShipping: true,
  });

  const selectedProducts = [
    {
      id: 1,
      name: "Oversized Hoodie -Black",
      quantity: 2,
      price: 4800000,
      image:
        "https://i.pinimg.com/474x/46/1c/cc/461cccd79d7f0939de0ed7492e1407a5.jpg",
    },
  ];

  const shippingCost = 300000;
  const tax = 1000;
  const totalAmount =
    selectedProducts.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    ) +
    shippingCost +
    tax;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl pb-8 font-bold brand">ZYLAR</h1>

          {/* Contact Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <input
              type="email"
              name="email"
              placeholder="Email or mobile phone number"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 focus:outline-none border rounded-lg"
              required
            />
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
              className="w-full px-4 py-2  focus:outline-none  border rounded-lg"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full px-4  focus:outline-none  py-2 border rounded-lg mb-4"
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

        {/* Right Side - Order Summary */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold border-b pb-3 mb-4">
            Order Summary
          </h2>
          <ul className="space-y-4">
            {selectedProducts.map((product) => (
              <li key={product.id} className="flex items-center space-x-4">
                {/* Product Image with Quantity Badge */}
                <div className="relative w-20 h-20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <span className="absolute top-0 right-[-1] bg-gray-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {product.quantity}
                  </span>
                </div>

                <div className="flex-1">
                  <span>
                    {product.name} x{product.quantity}
                  </span>
                  {/* Delivery Cost */}
                  <div className="flex justify-between text-[12px] pb-5">
                    <span>Delivery</span>
                    <span>₦{shippingCost / 100}</span>
                  </div>
                  <span className="block font-bold">
                    ₦{(product.price * product.quantity) / 100}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t pt-2 mt-2 flex justify-between font-bold">
            <span>Subtotal</span>
            <span>₦{totalAmount / 100}</span>
          </div>

          {/* Payment Section */}
          <h3 className="text-lg font-semibold mt-6 mb-2">Payment</h3>
          <p className="text-sm text-gray-600 mb-3">
            All transactions are secure and encrypted.
          </p>

          <div className="border p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Paystack</span>
              <div className="flex items-center space-x-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                  className="h-5"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  className="h-5"
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
  );
};

export default Checkout;
