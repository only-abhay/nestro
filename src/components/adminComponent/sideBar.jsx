"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderTree,
  Package,
  ShoppingCart,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);

  const menus = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Categories",
      href: "/admin/categories",
      icon: FolderTree,
    },
    {
      name: "Products",
      href: "/admin/products",
      icon: Package,
    },
    {
      name: "Orders",
      href: "/admin/orders",
      icon: ShoppingCart,
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <aside
      className={`h-screen bg-white border-r transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!collapsed && (
          <h2 className="text-xl font-bold">
            Admin
          </h2>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-lg p-2 hover:bg-gray-100"
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>
      </div>

      <nav className="p-3">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`mb-2 flex items-center rounded-xl py-3 transition-all
              ${
                collapsed
                  ? "justify-center px-0"
                  : "px-3"
              }
              ${
                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />

              {!collapsed && (
                <span className="ml-3 text-sm font-medium">
                  {item.name}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}