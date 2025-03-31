import React, { useState } from "react";
import { FaSearch, FaEnvelope } from "react-icons/fa";

const SupportHelpCenter = () => {
  const [search, setSearch] = useState("");
  const faqs = [
    { question: "How do I track my order?", answer: "You can track your order from your profile's Order History section." },
    { question: "How do I reset my password?", answer: "Go to the login page and click on 'Forgot Password' to reset it." },
    { question: "What payment methods are accepted?", answer: "We accept credit cards, PayPal, and other secure payment methods." },
    { question: "How do I contact customer support?", answer: "Click on the 'Contact Support' button below to reach us." }
  ];

  return (
    <section className="min-h-screen bg-gray-50  text-gray-900 py-12 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl poppins text-center mb-4">Support & Help Center</h1>
        
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-6">
          <FaSearch className="text-gray-500" />
          <input 
            type="text" 
            placeholder="Search for help..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2 w-full bg-transparent outline-none" 
          />
        </div>

        {/* FAQ Section */}
        <div className="space-y-4">
          {faqs.filter(faq => faq.question.toLowerCase().includes(search.toLowerCase())).map((faq, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg">
              <h2 className="text-[15px]">{faq.question}</h2>
              <p className="text-[10px] py-3 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Contact Support Button */}
        <div className="mt-6 text-center">
          <button className="flex items-center justify-center space-x-2 py-3 bg-black text-white rounded-lg px-4 font-semibold">
            <FaEnvelope />
            <span className="text-[12px]">Contact Support</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportHelpCenter;
