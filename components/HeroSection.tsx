"use client";

import dynamic from "next/dynamic";
import { Play } from "lucide-react";

const Basketball3D = dynamic(() => import("./Basketball3D"), { ssr: false });

export default function HeroSection() {
  return (
    <div className="relative flex-1 flex items-center justify-center overflow-hidden">
      {/* Giant background text */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <div className="flex items-center justify-center w-full px-4">
          {/* Left text: SPA */}
          <span
            className="font-bebas text-[#3a3a3a] leading-none tracking-tight"
            style={{ fontSize: "clamp(120px, 18vw, 280px)" }}
          >
            SPA
          </span>

          {/* Gap for ball */}
          <span
            style={{
              display: "inline-block",
              width: "clamp(120px, 18vw, 280px)",
              height: "clamp(120px, 18vw, 280px)",
            }}
          />

          {/* Right text: ING */}
          <span
            className="font-bebas text-[#3a3a3a] leading-none tracking-tight"
            style={{ fontSize: "clamp(120px, 18vw, 280px)" }}
          >
            ING
          </span>
        </div>
      </div>

      {/* 3D Basketball — centered on top of text */}
      <div className="relative flex items-center justify-center" style={{ zIndex: 10 }}>
        <Basketball3D />
      </div>

      {/* Promotion video button — top left */}
      <div className="absolute top-4 left-8 flex items-center gap-3 z-20">
        <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors">
          <Play size={14} className="text-white ml-0.5" fill="white" />
        </button>
        <div className="text-white text-xs leading-tight">
          <p>Promotion</p>
          <p>video</p>
        </div>
      </div>

      {/* Vertical counter — right edge */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 text-xs tracking-widest z-20"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        90 / 10
      </div>

      {/* Scroll indicator dot */}
      <div className="absolute right-4 bottom-16 w-3 h-3 rounded-full bg-gray-500 z-20" />
    </div>
  );
}
