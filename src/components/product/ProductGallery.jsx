"use client";

import { useState } from "react";

export default function ProductGallery() {
  const [active, setActive] = useState(0);

  const thumbs = [1, 2, 3, 4];

  return (
    <div className="pr-8">
      <div className="relative flex items-center justify-center h-[420px] rounded-[14px] bg-[#F5F0EB] mb-3 overflow-hidden">

        <span className="absolute top-4 left-4 bg-[#8B5E3C] text-white text-[10px] tracking-[0.08em] px-[10px] py-1 rounded">
          SALE
        </span>

        {/* Product Image */}
        <div className="w-[360px] h-[300px] bg-[#F0E8DC] rounded-lg" />
      </div>

      <div className="flex gap-[10px]">
        {thumbs.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-[72px] h-[72px] rounded-lg bg-[#EDE8E2]
            flex items-center justify-center border-[1.5px]
            transition-all
            ${
              active === index
                ? "border-[#8B5E3C]"
                : "border-transparent hover:border-[#C6A27E]"
            }`}
          >
            <div className="w-[50px] h-[40px] bg-[#D6BFA7]" />
          </button>
        ))}
      </div>
    </div>
  );
}