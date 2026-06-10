"use client";

import {
  Package,
  User,
  MapPin,
  Settings,
  LogOut
} from "lucide-react";

export default function ProfileSidebar({
  activeTab,
  setActiveTab,
}) {
  const menu = [
    {
      id: "orders",
      label: "My Orders",
      icon: Package,
    },
    {
      id: "profile",
      label: "Personal Info",
      icon: User,
    },
    {
      id: "address",
      label: "Addresses",
      icon: MapPin,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="space-y-4">

      <div className="bg-white rounded-3xl p-6 border">

        <div className="h-20 w-20 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mx-auto">
          RK
        </div>

        <h3 className="text-center mt-4 font-semibold">
          Rahul Khanna
        </h3>

        <p className="text-center text-sm text-gray-500">
          rahul@email.com
        </p>

        <span className="bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full block w-fit mx-auto mt-3">
          Gold Member
        </span>
      </div>

      <div className="bg-white rounded-3xl border p-4">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl mb-2 transition ${
                activeTab === item.id
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}

        <button className="w-full flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50">
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </aside>
  );
}