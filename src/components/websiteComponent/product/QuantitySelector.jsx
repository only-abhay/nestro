"use client";

import { useState } from "react";

export default function QuantitySelector() {
  const [qty, setQty] = useState(1);

  const increase = () => {
    if (qty < 5) setQty(qty + 1);
  };

  const decrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex border border-[#DDD4C9] rounded-md overflow-hidden">

        <button
          onClick={decrease}
          className="w-9 h-9 bg-[#F8F5F0] hover:bg-[#EDE5DA]"
        >
          −
        </button>

        <div className="w-[42px] h-9 flex items-center justify-center border-x border-[#DDD4C9] font-medium">
          {qty}
        </div>

        <button
          onClick={increase}
          className="w-9 h-9 bg-[#F8F5F0] hover:bg-[#EDE5DA]"
        >
          +
        </button>
      </div>

      <span className="text-[11px] text-[#8A8177]">
        Max 5 per order
      </span>
    </div>
  );
}