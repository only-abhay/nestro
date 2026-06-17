"use client"

import { useState } from "react";


export default function StoreSidebar() {
  const[toggle,setToggle]=useState(true)

  function ToggleHandler(){
    setToggle(!toggle)
  }
  return (
    <aside
   
  
      className=" w-full
      lg:w-[230px]
      shrink-0
      bg-white
      rounded-[12px]
      border-[0.5px]
      border-[#E8E0D5]
      p-[18px]
      sm:p-[22px]
      lg:sticky
      lg:top-[72px]"
    >
      {/* Title */}

      <div   onClick={ToggleHandler} className="text-[10px]  tracking-[0.18em] uppercase text-[#6B7280] mb-[18px] font-medium cursor-pointer">
        Filters
      </div>

      {/* Room Type */}
<div className={`${toggle==true ? "block"  : "hidden" } hidden lg:block`}>
  
      <div className="mb-[22px]">
        <div className="text-[12px] font-medium text-[#1E1E1E] mb-[11px] tracking-[0.03em]">
          Room Type
        </div>

        <div className="flex items-center gap-[9px] mb-[8px] cursor-pointer">
          <div className="w-[15px] h-[15px] rounded-[4px] bg-[#8B5E3C] border border-[#8B5E3C] relative">
            <span className="absolute left-[3px] top-[3px] w-[7px] h-[4px] border-l-[1.5px] border-b-[1.5px] border-white rotate-[-45deg]" />
          </div>

          <span className="text-[12px] text-[#444444]">
            Living Room
          </span>

          <span className="ml-auto text-[10px] text-[#6B7280]">
            42
          </span>
        </div>

        <div className="flex items-center gap-[9px] mb-[8px] cursor-pointer">
          <div className="w-[15px] h-[15px] rounded-[4px] border border-[#D6BFA7]" />

          <span className="text-[12px] text-[#444444]">
            Bedroom
          </span>

          <span className="ml-auto text-[10px] text-[#6B7280]">
            31
          </span>
        </div>

        <div className="flex items-center gap-[9px] mb-[8px] cursor-pointer">
          <div className="w-[15px] h-[15px] rounded-[4px] border border-[#D6BFA7]" />

          <span className="text-[12px] text-[#444444]">
            Dining Room
          </span>

          <span className="ml-auto text-[10px] text-[#6B7280]">
            18
          </span>
        </div>

        <div className="flex items-center gap-[9px] cursor-pointer">
          <div className="w-[15px] h-[15px] rounded-[4px] border border-[#D6BFA7]" />

          <span className="text-[12px] text-[#444444]">
            Home Office
          </span>

          <span className="ml-auto text-[10px] text-[#6B7280]">
            24
          </span>
        </div>
      </div>

      <hr className="border-0 border-t border-[#F0EBE3] my-[14px]" />

      {/* Price */}

      <div className="mb-[22px]">
        <div className="text-[12px] font-medium text-[#1E1E1E] mb-[11px]">
          Price Range
        </div>

        <div className="flex items-center gap-[8px]">
          <input
            placeholder="₹8,000"
            className="
            w-full
            flex-1
            px-[10px]
            py-[7px]
            text-[11px]
            rounded-[6px]
            border-[0.5px]
            border-[#E8E0D5]
            bg-[#FAFAF9]
            outline-none
          "
          />
        </div>
      </div>

      <hr className="border-0 border-t border-[#F0EBE3] my-[14px]" />

      {/* Material */}

      <div className="mb-[22px]">
        <div className="text-[12px] font-medium mb-[11px]">
          Material
        </div>

        {[
          "Solid Wood",
          "Velvet",
          "Linen",
          "Marble",
          "Leather",
        ].map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-[9px] mb-[8px] cursor-pointer"
          >
            {i === 0 ? (
              <div className="w-[15px] h-[15px] rounded-[4px] bg-[#8B5E3C] border border-[#8B5E3C] relative">
                <span className="absolute left-[3px] top-[3px] w-[7px] h-[4px] border-l-[1.5px] border-b-[1.5px] border-white rotate-[-45deg]" />
              </div>
            ) : (
              <div className="w-[15px] h-[15px] rounded-[4px] border border-[#D6BFA7]" />
            )}

            <span className="text-[12px] text-[#444444]">
              {item}
            </span>
          </div>
        ))}
      </div>

      <hr className="border-0 border-t border-[#F0EBE3] my-[14px]" />

      {/* Color */}

      <div className="mb-[22px]">
        <div className="text-[12px] font-medium mb-[11px]">
          Color
        </div>

        <div className="flex flex-wrap gap-[8px]">
          <div className="w-[22px] h-[22px] rounded-full border-2 border-[#8B5E3C] bg-[#F5F0EB]" />

          <div className="w-[22px] h-[22px] rounded-full bg-[#2C2016]" />

          <div className="w-[22px] h-[22px] rounded-full bg-[#8B5E3C]" />

          <div className="w-[22px] h-[22px] rounded-full bg-[#6B7B8D]" />

          <div className="w-[22px] h-[22px] rounded-full bg-[#C4A882]" />

          <div className="w-[22px] h-[22px] rounded-full bg-[#4A4A4A]" />
        </div>
      </div>

      <hr className="border-0 border-t border-[#F0EBE3] my-[14px]" />

      {/* Availability */}

      <div className="mb-[22px]">
        <div className="text-[12px] font-medium mb-[11px]">
          Availability
        </div>

        <div className="flex items-center gap-[9px] mb-[8px]">
          <div className="w-[15px] h-[15px] rounded-[4px] bg-[#8B5E3C] border border-[#8B5E3C] relative">
            <span className="absolute left-[3px] top-[3px] w-[7px] h-[4px] border-l-[1.5px] border-b-[1.5px] border-white rotate-[-45deg]" />
          </div>

          <span className="text-[12px] text-[#444444]">
            In Stock
          </span>
        </div>

        <div className="flex items-center gap-[9px]">
          <div className="w-[15px] h-[15px] rounded-[4px] border border-[#D6BFA7]" />

          <span className="text-[12px] text-[#444444]">
            Made to Order
          </span>
        </div>
      </div>

      <hr className="border-0 border-t border-[#F0EBE3] my-[14px]" />

      {/* Rating */}

      <div>
        <div className="text-[12px] font-medium mb-[11px]">
          Rating
        </div>

        <div className="flex items-center gap-[6px] mb-[7px] cursor-pointer">
          <span className="text-[11px] text-[#C6A27E]">★</span>
          <span className="text-[11px] text-[#C6A27E]">★</span>
          <span className="text-[11px] text-[#C6A27E]">★</span>
          <span className="text-[11px] text-[#C6A27E]">★</span>
          <span className="text-[11px] text-[#C6A27E]">★</span>

          <span className="text-[11px] text-[#6B7280]">
            & up
          </span>
        </div>

        <div className="flex items-center gap-[6px] cursor-pointer">
          <span className="text-[11px] text-[#C6A27E]">★</span>
          <span className="text-[11px] text-[#C6A27E]">★</span>
          <span className="text-[11px] text-[#C6A27E]">★</span>
          <span className="text-[11px] text-[#C6A27E]">★</span>
          <span className="text-[11px] text-[#E8E0D5]">★</span>

          <span className="text-[11px] text-[#6B7280]">
            & up
          </span>
        </div>
      </div>
</div>
    </aside>
  );
}