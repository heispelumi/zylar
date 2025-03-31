// import React, { useState } from "react";

// const faqs = [
//   { question: "How do I track my order?", answer: "You can track your order in your account under 'Order History'." },
//   { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and Apple Pay." },
//   { question: "Can I change my shipping address?", answer: "Yes, you can update your address before the order is shipped." },
//   { question: "How do I return an item?", answer: "You can initiate a return by visiting the 'Returns & Refunds' section." },
// ];

// const HelpCenter = () => {
//   const [query, setQuery] = useState("");
//   const [filteredFAQs, setFilteredFAQs] = useState([]);

//   const handleSearch = (e) => {
//     const value = e.target.value.toLowerCase();
//     setQuery(value);

//     if (value === "") {
//       setFilteredFAQs([]);
//     } else {
//       const results = faqs.filter((faq) =>
//         faq.question.toLowerCase().includes(value)
//       );
//       setFilteredFAQs(results);
//     }
//   };

//   return (
//     <section className="min-h-screen bg-gray-50 text-gray-900 py-12 px-6 sm:px-12">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-2xl poppins text-center mb-6">Support / Help Center</h1>

//         {/* Search Input */}
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search for help..."
//             value={query}
//             onChange={handleSearch}
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//           />
//           {query && filteredFAQs.length > 0 && (
//             <div className="absolute w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg max-h-40 overflow-y-auto">
//               {filteredFAQs.map((faq, index) => (
//                 <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
//                   {faq.question}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* FAQ Section */}
//         <div className="mt-6">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border-b py-4">
//               <h2 className="text-lg font-semibold">{faq.question}</h2>
//               <p className="text-gray-600">{faq.answer}</p>
//             </div>
//           ))}
//         </div>

//         {/* Contact Support */}
//         <div className="mt-6 text-center">
//           <button className="px-6 py-3 bg-black text-white rounded-lg font-semibold">
//             Contact Support
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HelpCenter;
import React from "react";
import { FaRegUser, FaShoppingBag, FaHeadset, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-900 py-12 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 border-b pb-4 mb-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
            <FaRegUser size={30} />
          </div>
          <div>
            <h2 className="text-xl font-bold">Welcome, Pelumi Philips</h2>
            <p className="text-gray-500 text-sm">Member since: Jan 2024</p>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-3">
              <FaShoppingBag className="text-black" size={20} />
              <h1 className="text-sm font-medium">Order History</h1>
            </div>
            <Link to="/order" className="text-black text-sm font-medium hover:underline">View</Link>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-3">
              <FaHeadset className="text-black" size={20} />
              <span className="text-sm font-medium">Support / Help Center</span>
            </div>
            <Link to="/helpcenter" className="text-black text-sm font-medium hover:underline">Get Help</Link>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-6">
          <button className="w-full flex items-center justify-center space-x-2 py-3 bg-black text-white rounded-lg font-semibold">
            <FaSignOutAlt />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
