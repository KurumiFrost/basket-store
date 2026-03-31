"use client";

import { ShoppingCart, User } from "lucide-react";

const navLinks = ["Products", "Customize", "Contacts"];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 relative z-20">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-5 h-5 rounded-full border-2 border-white" />
        </div>
        <div className="leading-tight">
          <p className="text-white font-bold text-sm tracking-widest uppercase">
            Slam
          </p>
          <p className="text-white font-bold text-sm tracking-widest uppercase">
            Dunk
          </p>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-10">
        {navLinks.map((link) => (
          <button
            key={link}
            className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
              link === "Products"
                ? "text-[#FF4500]"
                : "text-white hover:text-[#FF4500]"
            }`}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center gap-5">
        <button className="text-white hover:text-[#FF4500] transition-colors">
          <User size={22} />
        </button>
        <button className="relative text-white hover:text-[#FF4500] transition-colors">
          <ShoppingCart size={22} />
          <span className="absolute -top-2 -right-2 bg-[#FF4500] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </button>
      </div>
    </nav>
  );
}
