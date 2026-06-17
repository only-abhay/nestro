"use client";

import { Bell, Menu, Search, ChevronDown } from "lucide-react";

export default function Header({ title = "Dashboard" }) {
  return (
    <header className="sticky top-0 z-40 h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="lg:hidden">
          <Menu size={24} />
        </button>

        <div>
          <h1 className="text-xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="text-xs text-gray-500">
            Welcome back, Admin 👋
          </p>
        </div>
      </div>

      {/* Center Search */}
      <div className="hidden md:flex flex-1 max-w-xl mx-8">
        <div className="relative w-full">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:border-blue-500 focus:bg-white transition"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="relative h-11 w-11 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
          <Bell size={20} />

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2 hover:bg-gray-50 transition">
          <img
            src="https://i.pravatar.cc/100"
            alt="Admin"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="hidden md:block text-left">
            <p className="text-sm font-semibold text-gray-900">
              Abhay Shaw
            </p>

            <p className="text-xs text-gray-500">
              Super Admin
            </p>
          </div>

          <ChevronDown
            size={18}
            className="hidden md:block text-gray-500"
          />
        </button>
      </div>
    </header>
  );
}