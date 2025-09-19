import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // you can also validate or save data here
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#166700] via-[#166700]/60 to-yellow-200/35 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fbf9f1] text-[#3D3436] py-1.5 flex items-center justify-between border-b border-gray-400 w-full h-16 flex-shrink-0 fixed top-0 right-0 z-50">
			<h1
				className="font-madimi
          font-normal
          text-[32px]
          leading-[100%]
          tracking-[0%]
          ml-6 mb-3"
			>
				AgriScan
			</h1>
		</div>
        <div className=" bg-[#fbf8f3] shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg border border-green-200">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-center mb-6">
            Login
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                Username
                </label>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#166700] focus:border-[#166700]"
                placeholder="Enter your username"
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                Email ID
                </label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base 
             focus:outline-none focus:ring-2 focus:ring-[#166700] focus:border-[#166700]"
                placeholder="Enter your email"
                />
            </div>

            {/* Button */}
            <button
                type="submit"
                className="w-full bg-black text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base shadow-md transition duration-200 
                hover:shadow-lg hover:shadow-black/40 hover:scale-[1.02]"
            >
                Get Started
            </button>
            </form>
        </div>
    </div>
  );
}
