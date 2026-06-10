"use client";

import { useState } from "react";
import { Save, User } from "lucide-react";

export default function PersonalInfoTab() {
  const [form, setForm] = useState({
    firstName: "Rahul",
    lastName: "Khanna",
    email: "rahul@email.com",
    phone: "+91 98765 43210",
    dob: "1990-06-15",
    gender: "Male",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white border rounded-3xl p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-12 w-12 rounded-xl bg-stone-100 flex items-center justify-center">
          <User size={22} />
        </div>

        <div>
          <h2 className="font-semibold text-xl">
            Personal Information
          </h2>
          <p className="text-sm text-gray-500">
            Manage your profile details
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block text-sm font-medium mb-2">
            First Name
          </label>

          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Last Name
          </label>

          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Date of Birth
          </label>

          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Gender
          </label>

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>
        </div>

      </div>

      <button className="mt-8 bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:opacity-90">
        <Save size={18} />
        Save Changes
      </button>
    </div>
  );
}