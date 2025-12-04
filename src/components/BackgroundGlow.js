// src/components/BackgroundGlow.jsx
import React from "react";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Фиолетовое свечение сверху справа */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-700 opacity-30 blur-[160px] rounded-full"></div>
      
      {/* Синее свечение снизу слева */}
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-indigo-600 opacity-30 blur-[160px] rounded-full"></div>
    </div>
  );
}
