"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[#1B2A49] text-white text-xs md:text-base">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Contact Info */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0">
          <div className="flex flex-row space-x-3 md:space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[#D4A73B]" />
              <span>+234 800 000 0000</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-[#D4A73B]" />
              <span>info@stellamarisparish.com</span>
            </div>{" "}
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-[#D4A73B]" />
            <span>123 Church Street, Aba, Nigeria</span>
          </div>
        </div>

        {/* Right: Optional quick info */}
        <div className="mt-2 md:mt-0 hidden md:flex">
          <span className="italic">Welcome to Stella Maris Parish Aba!</span>
        </div>
      </div>
    </div>
  );
}
