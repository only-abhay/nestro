"use client";

import Link from "next/link";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Store", href: "/store" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Checkout", href: "/checkout" },
    { name: "Sign In", href: "/auth" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E0D5] bg-[#FAFAF9]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[58px] items-center justify-between px-4 sm:px-6 lg:px-7">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-[16px] font-medium uppercase tracking-[0.12em] text-[#1E1E1E]"
        >
          Nestro
          <span className="text-[#8B5E3C]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`rounded-md px-3 py-1.5 text-[11px] tracking-[0.06em] transition-all ${
                pathname === item.href
                  ? "bg-[#F0EBE3] text-[#8B5E3C] font-medium"
                  : "text-[#6B7280] hover:bg-[#F0EBE3] hover:text-[#8B5E3C]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-[#EDE5DA]">
            <Search size={17} />
          </button>

          <button className="relative flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-[#EDE5DA]">
            <ShoppingBag size={17} />

            <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#8B5E3C] text-[8px] text-white">
              3
            </span>
          </button>

          <Link
            href="/account"
            className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full border border-[#C6A27E] bg-[#F0EBE3] text-[#8B5E3C] transition hover:bg-[#C6A27E] hover:text-white"
          >
            <User size={16} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex lg:hidden h-8 w-8 items-center justify-center"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-[#E8E0D5] bg-[#FAFAF9] px-4 py-3">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-4 py-3 text-sm transition ${
                pathname === item.href
                  ? "bg-[#F0EBE3] text-[#8B5E3C] font-medium"
                  : "text-[#6B7280]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/account"
            className="mt-2 block rounded-md px-4 py-3 text-sm text-[#6B7280]"
          >
            My Account
          </Link>
        </div>
      </div>
    </header>
  );
}