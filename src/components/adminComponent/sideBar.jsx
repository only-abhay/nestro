"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Grid2X2,
  Layers3,
  ShieldCheck,
  TriangleAlert,
  FileText,
  ClipboardList,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menuSections = [
    {
      title: "MAIN",
      items: [
        {
          name: "Dashboards",
          icon: LayoutDashboard,
          href: "/admin/dashboard",
          active: true,
        },
      ],
    },
    {
      title: "WEB APPS",
      items: [
        {
          name: "Apps",
          icon: Grid2X2,
          href: "/admin/apps",
        },
        {
          name: "Nested Menu",
          icon: Layers3,
          href: "/admin/nested",
        },
      ],
    },
    {
      title: "PAGES",
      items: [
        {
          name: "Authentication",
          icon: ShieldCheck,
          href: "/admin/auth",
        },
        {
          name: "Error",
          icon: TriangleAlert,
          href: "/admin/error",
        },
        {
          name: "Pages",
          icon: FileText,
          href: "/admin/pages",
        },
      ],
    },
    {
      title: "GENERAL",
      items: [
        {
          name: "Forms",
          icon: ClipboardList,
          href: "/admin/forms",
        },
      ],
    },
  ];

  return (
    <aside
      className={`
      sticky 
      top-0
      left-0
      h-screen
      bg-[#4B5696]
      text-white
      transition-all
      duration-300
      ease-in-out
      ${collapsed ? "w-20" : "w-[280px]"}
    `}
    >
      {/* Logo */}
      <div className="relative flex h-[92px] items-center  justify-between border-b border-white/10 px-6">
        <div className="flex items-center gap-3 overflow-hidden">
          <span
            className={`
            whitespace-nowrap
            text-3xl
            font-semibold
            transition-all
            duration-300
            ${collapsed ? "w-0 opacity-0" : "opacity-100"}
          `}
          >
            YZEN
          </span>
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
       className="mt-6 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg"
        >
          {collapsed ? (
            <ChevronRight size={16} />
          ) : (
            <ChevronLeft size={16} />
          )}
        </button>
      </div>

      <div className=" py-5">
        {menuSections.map((section) => (
          <div key={section.title} className="mb-8">
            {!collapsed && (
              <h3
                className="px-10 pb-4 text-xs font-semibold uppercase tracking-widest text-white/40
              "
              >
                {section.title}
              </h3>
            )}

            <div className="space-y-1 px-4">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      group
                      relative
                      flex
                      h-14
                      items-center
                      rounded-full
                      transition-all
                      duration-200

                      ${
                        item.active
                          ? "bg-white/10 text-white"
                          : "hover:bg-white/5 text-white/80"
                      }

                      ${
                        collapsed
                          ? "justify-center px-0"
                          : "justify-between px-5"
                      }
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <Icon size={21} />

                      {!collapsed && (
                        <span className="text-[17px] font-medium">
                          {item.name}
                        </span>
                      )}
                    </div>

                    {!collapsed && (
                      <ChevronDown
                        size={18}
                        className="text-white/70"
                      />
                    )}

                    {/* Tooltip */}
                    {collapsed && (
                      <div
                        className="
                        pointer-events-none
                        absolute
                        left-16
                        rounded-lg
                        bg-slate-900
                        px-3
                        py-2
                        text-sm
                        opacity-0
                        transition
                        group-hover:opacity-100
                        whitespace-nowrap
                        z-50
                      "
                      >
                        {item.name}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
