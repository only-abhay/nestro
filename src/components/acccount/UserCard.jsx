"use client";

import { Crown, Mail, Phone } from "lucide-react";

export default function UserCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 opacity-80" />

      <div className="relative z-10">
        {/* Avatar */}
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-gradient-to-r from-amber-600 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">
            RK
          </div>

          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              Rahul Khanna
            </h2>

            <p className="text-sm text-neutral-500">
              Premium Customer
            </p>

            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
              <Crown size={14} />
              Gold Member
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3 text-sm text-neutral-600">
            <Mail size={16} />
            rahul@email.com
          </div>

          <div className="flex items-center gap-3 text-sm text-neutral-600">
            <Phone size={16} />
            +91 98765 43210
          </div>
        </div>

        {/* Loyalty */}
        <div className="mt-6 rounded-2xl bg-neutral-50 p-4">
          <div className="flex justify-between">
            <span className="text-sm text-neutral-500">
              Loyalty Points
            </span>

            <span className="font-semibold">
              420 pts
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-neutral-200">
            <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
          </div>

          <p className="mt-2 text-xs text-neutral-500">
            80 points away from Platinum Membership
          </p>
        </div>
      </div>
    </div>
  );
}