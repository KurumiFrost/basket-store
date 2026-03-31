"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BottomBar() {
  return (
    <div className="flex items-end justify-between px-8 pb-6 relative z-20">
      {/* Left: Price & Size */}
      <div>
        <p className="text-[#FF4500] font-bold" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
          $34.99
        </p>
        <p className="text-white text-xs mt-1 tracking-wider uppercase">
          Size: <span className="font-semibold">29.5&quot;</span>&nbsp;&bull;&nbsp;Official
        </p>
      </div>

      {/* Center: Add to Cart */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6">
        <button
          className="bg-[#FF4500] hover:bg-[#cc3700] text-white font-semibold tracking-[0.2em] uppercase px-14 py-4 rounded-lg transition-colors duration-200 text-sm"
        >
          Add to Cart
        </button>
      </div>

      {/* Right: Nav arrows */}
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 rounded-full bg-[#1e1e1e] border border-[#333] flex items-center justify-center text-white hover:bg-[#2a2a2a] transition-colors">
          <ChevronLeft size={18} />
        </button>
        <button className="w-10 h-10 rounded-full bg-[#1e1e1e] border border-[#333] flex items-center justify-center text-white hover:bg-[#2a2a2a] transition-colors">
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Language */}
      <div className="absolute left-8 bottom-2 text-gray-600 text-xs">
        Ru
      </div>
    </div>
  );
}
