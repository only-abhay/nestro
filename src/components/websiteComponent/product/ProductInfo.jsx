"use client";

import ProductUSP from "./ProductUSP";

import {
  Truck,
  RefreshCcw,
  Wrench,
  ShieldCheck,
  ShoppingBag,
  Check,
} from "lucide-react";

export default function ProductInfo() {
  return (
    <div className="pl-1 pt-2">

      {/* Category */}
      <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--text3)] mb-2">
        Sofas
      </div>

      {/* Product Name */}
      <h1
        className="
          text-[28px]
          font-normal
          text-[var(--text)]
          tracking-[-0.02em]
          leading-[1.2]
          mb-[10px]
        "
      >
        Ember Velvet 3-Seater
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-[10px] mb-[18px]">

        <span className="text-[13px] text-[var(--brl)]">
          ★★★★★
        </span>

        <span className="text-[12px] text-[var(--text3)]">
          4.9 (48 reviews)
        </span>

        <div className="w-px h-[14px] bg-[var(--bord)]" />

        <span className="flex items-center gap-1 text-[12px] text-[#3B6D11]">
          <Check size={11} />
          In Stock
        </span>

      </div>

      {/* Price */}
      <div
        className="
          flex items-baseline gap-3
          mb-[22px]
          pb-[22px]
          border-b border-[var(--bord)]
        "
      >
        <span className="text-[30px] font-medium">
          ₹89,000
        </span>

        <span className="text-[16px] text-[var(--text3)] line-through">
          ₹1,08,000
        </span>

        <span
          className="
            text-[12px]
            text-[#3B6D11]
            bg-[#EAF3DE]
            px-[9px]
            py-[3px]
            rounded-full
          "
        >
          Save ₹19,000
        </span>
      </div>

      {/* Colors */}
      <div className="text-[11px] font-medium mb-[10px]">
        Upholstery Color
      </div>

      <div className="flex gap-[10px] mb-[20px]">

        <button className="w-[30px] h-[30px] rounded-full bg-[#8B5E3C] border-2 border-[#8B5E3C] ring-4 ring-[#8B5E3C]/15" />

        <button className="w-[30px] h-[30px] rounded-full bg-[#2C2016]" />

        <button className="w-[30px] h-[30px] rounded-full bg-[#6B7B8D]" />

        <button className="w-[30px] h-[30px] rounded-full bg-[#D6BFA7]" />

        <button className="w-[30px] h-[30px] rounded-full bg-[#4A4A4A]" />

      </div>

      {/* Configuration */}
      <div className="text-[11px] font-medium mb-[10px]">
        Configuration
      </div>

      <div className="flex flex-wrap gap-2 mb-[22px]">

        <button className="px-4 py-2 border border-[var(--bord)] rounded-md text-[12px]">
          2-Seater
        </button>

        <button
          className="
            px-4 py-2
            border border-[#8B5E3C]
            bg-[#FFF8F5]
            text-[#8B5E3C]
            rounded-md
            text-[12px]
          "
        >
          3-Seater
        </button>

        <button className="px-4 py-2 border border-[var(--bord)] rounded-md text-[12px]">
          L-Shape
        </button>

        <button className="px-4 py-2 border border-[var(--bord)] rounded-md text-[12px]">
          Corner Sofa
        </button>

      </div>

      {/* Quantity */}
      <div className="text-[11px] font-medium mb-[10px]">
        Quantity
      </div>

      <div className="flex items-center gap-4 mb-[22px]">

        <div
          className="
            flex items-center
            border border-[var(--bord)]
            rounded-md overflow-hidden
          "
        >
          <button className="w-9 h-9 bg-[var(--bg2)]">
            −
          </button>

          <div
            className="
              w-[42px]
              h-9
              flex items-center justify-center
              border-x border-[var(--bord)]
            "
          >
            1
          </div>

          <button className="w-9 h-9 bg-[var(--bg2)]">
            +
          </button>
        </div>

        <span className="text-[11px] text-[var(--text3)]">
          Max 5 per order
        </span>

      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-[24px]">

        <button
          className="
            flex-1
            h-[48px]
            bg-[#8B5E3C]
            text-white
            rounded-md
            flex items-center justify-center gap-2
            uppercase
            tracking-[0.08em]
            text-[12px]
          "
        >
          <ShoppingBag size={16} />
          Add To Cart
        </button>

        <button
          className="
            flex-1
            h-[48px]
            bg-[#2C2016]
            text-[#D6BFA7]
            rounded-md
            uppercase
            tracking-[0.08em]
            text-[12px]
          "
        >
          Buy Now
        </button>

      </div>

      {/* USP Section */}
      <div className="grid grid-cols-2 gap-[10px] mb-[22px]">

        <ProductUSP
          icon={<Truck className="w-4 h-4 text-[#8B5E3C]" />}
          text="Free delivery on orders above ₹50,000"
        />

        <ProductUSP
          icon={<RefreshCcw className="w-4 h-4 text-[#8B5E3C]" />}
          text="30-day hassle-free returns"
        />

        <ProductUSP
          icon={<Wrench className="w-4 h-4 text-[#8B5E3C]" />}
          text="Free expert assembly included"
        />

        <ProductUSP
          icon={<ShieldCheck className="w-4 h-4 text-[#8B5E3C]" />}
          text="5-year manufacturer warranty"
        />

      </div>

    </div>
  );
}
