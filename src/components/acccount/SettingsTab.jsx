"use client";

import { useState } from "react";
import {
  Bell,
  Lock,
  ShieldCheck,
} from "lucide-react";

export default function SettingsTab() {
  const [emailNotif, setEmailNotif] =
    useState(true);

  const [smsNotif, setSmsNotif] =
    useState(false);

  return (
    <div className="space-y-6">

      {/* Notifications */}

      <div className="bg-white border rounded-3xl p-6">

        <div className="flex items-center gap-3 mb-6">
          <Bell size={22} />

          <h2 className="font-semibold text-xl">
            Notifications
          </h2>
        </div>

        <div className="space-y-5">

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">
                Email Notifications
              </h3>

              <p className="text-sm text-gray-500">
                Order updates & promotions
              </p>
            </div>

            <input
              type="checkbox"
              checked={emailNotif}
              onChange={() =>
                setEmailNotif(!emailNotif)
              }
              className="h-5 w-5"
            />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">
                SMS Notifications
              </h3>

              <p className="text-sm text-gray-500">
                Delivery alerts
              </p>
            </div>

            <input
              type="checkbox"
              checked={smsNotif}
              onChange={() =>
                setSmsNotif(!smsNotif)
              }
              className="h-5 w-5"
            />
          </div>

        </div>
      </div>

      {/* Security */}

      <div className="bg-white border rounded-3xl p-6">

        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck size={22} />

          <h2 className="font-semibold text-xl">
            Security
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="block text-sm font-medium mb-2">
              Current Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              New Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

        </div>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2">
          <Lock size={18} />
          Update Password
        </button>
      </div>
    </div>
  );
}