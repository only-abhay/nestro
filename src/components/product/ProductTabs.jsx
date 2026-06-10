"use client";

import { useState } from "react";

export default function ProductTabs() {
  const [tab, setTab] = useState("desc");

  return (
    <>
      <div className="flex border-b border-[#DDD4C9] mb-[18px]">

        <button
          onClick={() => setTab("desc")}
          className={`mr-[22px] pb-[10px] text-[12px]
          ${
            tab === "desc"
              ? "text-[#8B5E3C] border-b-2 border-[#8B5E3C]"
              : "text-[#8A8177]"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setTab("spec")}
          className={`mr-[22px] pb-[10px] text-[12px]
          ${
            tab === "spec"
              ? "text-[#8B5E3C] border-b-2 border-[#8B5E3C]"
              : "text-[#8A8177]"
          }`}
        >
          Specifications
        </button>

        <button
          onClick={() => setTab("review")}
          className={`pb-[10px] text-[12px]
          ${
            tab === "review"
              ? "text-[#8B5E3C] border-b-2 border-[#8B5E3C]"
              : "text-[#8A8177]"
          }`}
        >
          Reviews (48)
        </button>
      </div>

      {tab === "desc" && (
        <p className="text-[12px] leading-[1.8] text-[#5C554F]">
          Crafted from premium Italian velvet stretched over a solid
          beechwood frame...
        </p>
      )}

      {tab === "spec" && (
        <div className="space-y-3">
          <div className="flex justify-between border-b pb-2">
            <span>Dimensions</span>
            <span className="font-medium">
              215 × 86 × 78 cm
            </span>
          </div>
        </div>
      )}

      {tab === "review" && (
        <div className="space-y-4">
          <div className="p-4 rounded-lg border bg-[#F8F5F0]">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-sm">
                Priya R.
              </span>
              <span>★★★★★</span>
            </div>

            <p className="text-[11px] italic">
              Absolutely stunning...
            </p>
          </div>
        </div>
      )}
    </>
  );
}