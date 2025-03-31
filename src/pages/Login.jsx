import React, { useState, useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Ensures input fields are empty when the component mounts
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  return (
    <section className="pb-7">
      <div className="flex flex-col md:flex-row h-auto md:h-[800px] lg:h-[580px] bg-gray-100">
        {/* Left Section (Login Form) */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 py-12 bg-white mx-auto">
          {/* Brand Name */}
          <h1 className="text-3xl font-bold brand">ZYLAR</h1>

          {/* Welcome Message */}
          <h2 className="text-[12px] font-semibold mb-5 mt-3">Welcome Back! 👋</h2>

          <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-6 text-center">
            Enter your credentials to access your account.
          </p>

          {/* Form */}
          <form autoComplete="off" className="w-full">
            {/* Email Input */}
            <div className="w-full mb-4">
              <input
                type="email"
                name="no-autofill-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                autoComplete="new-password"
                className="w-full border-b-2 sm:border-b-4 border-black focus:outline-none placeholder-black p-2 sm:p-3 text-sm sm:text-base"
              />
            </div>

            {/* Password Input */}
            <div className="w-full mb-2">
              <input
                type="password"
                name="no-autofill-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="new-password"
                className="w-full border-b-2 sm:border-b-4 border-black focus:outline-none placeholder-black p-2 sm:p-3 text-sm sm:text-base"
              />
            </div>

            {/* Forgot Password */}
            <div className="w-full flex justify-end mb-6">
              <a href="/forgot-password" className="text-gray-600 text-xs sm:text-sm font-medium hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold transition-transform duration-200 hover:bg-gray-900 hover:scale-105"
            >
              Log In
            </button>

            {/* Don't Have an Account */}
            <p className="text-gray-600 text-xs sm:text-sm mt-4 text-center">
              Don't have an account?{" "}
              <a href="/register" className="text-black font-semibold hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 lg:w-2/3 flex justify-center items-center overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://i.pinimg.com/736x/ef/94/f8/ef94f827f5d8bd5992ed3535c6648d54.jpg"
            alt="Login Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
