"use client";

import {
  Menu,
  Search,
  Moon,
  ShoppingCart,
  Bell,
  ScanLine,
  Settings,
} from "lucide-react";

export default function Header() {
  return (
    <header className="h-[88px] sticky top-0 bg-[#F5F5F5] border-b border-[#E5E7EB] flex justify-between">

      {/* Left Section */}
      <div className="flex items-center flex-1">

        <div className="ml-7">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Results..."
              className="
                w-[480px]
                h-[52px]
                rounded-xl
                bg-white
                border
                border-[#E7E7E7]
                pl-5
                pr-12
                outline-none
                text-slate-600
                placeholder:text-slate-400
              "
            />

            <Search
              size={20}
              className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex">

        {/* Trash */}
        <div className="w-[72px]   flex items-center justify-center">
          <span className="text-xl text-slate-500">🗑️</span>
        </div>

        {/* Dark Mode */}
        <div className="w-[72px]  flex items-center justify-center">
          <Moon size={20} className="text-slate-500" />
        </div>

        {/* Cart */}
        <div className="w-[72px] flex items-center justify-center relative">
          <ShoppingCart size={20} className="text-slate-500" />

          <span
            className="
              absolute
              top-5
              right-5
              w-5
              h-5
              rounded-full
              bg-green-500
              text-white
              text-[10px]
              font-semibold
              flex
              items-center
              justify-center
            "
          >
            5
          </span>
        </div>

        {/* Notification */}
        <div className="w-[72px] flex items-center justify-center relative">
          <Bell size={20} className="text-slate-500" />

          <span
            className="
              absolute
              top-6
              right-6
              w-2.5
              h-2.5
              rounded-full
              bg-pink-500
            "
          />
        </div>

        {/* Fullscreen */}
        <div className="w-[72px]   flex items-center justify-center">
          <ScanLine size={20} className="text-slate-500" />
        </div>

        {/* Profile */}
        <div className="w-[72px]  flex items-center justify-center">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-10 h-10 rounded-md object-cover"
          />
        </div>

        {/* Settings */}
        <div className="w-[72px] flex items-center justify-center">
          <Settings size={20} className="text-slate-500" />
        </div>

      </div>
    </header>
  );
}