import React from "react";
import { usePaystackPayment } from "react-paystack";

const Paystack = ({ email, amount }) => {
  const config = {
    publicKey: "pk_test_0eb59079753c35b57c8fc95194c5460d66941146", // Replace with your actual Paystack key
    email,
    amount: amount * 100, // Convert amount to kobo
    currency: "NGN",
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    initializePayment(
      (response) => {
        console.log("Payment Success:", response);
        alert("Payment successful!");
      },
      (error) => {
        console.log("Payment Failed:", error);
        alert("Payment failed. Please try again.");
      }
    );
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full py-3 bg-black text-white text-lg font-medium rounded-lg mt-4"
      disabled={!email}
    >
      Pay now
    </button>
  );
};

export default Paystack;
