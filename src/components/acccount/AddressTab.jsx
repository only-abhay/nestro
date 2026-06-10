"use client";

import {
  Plus,
  Pencil,
  Trash2,
  MapPin,
} from "lucide-react";

export default function AddressTab() {
  const addresses = [
    {
      id: 1,
      title: "Home",
      default: true,
      address:
        "42, Malviya Nagar, Jaipur, Rajasthan 302017, India",
    },
    {
      id: 2,
      title: "Office",
      default: false,
      address:
        "Plot 8, Tech Park, Gurugram, Haryana 122015",
    },
  ];

  return (
    <div className="bg-white border rounded-3xl p-6 lg:p-8">

      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="font-semibold text-xl">
            Saved Addresses
          </h2>

          <p className="text-gray-500 text-sm">
            Manage delivery addresses
          </p>
        </div>

        <button className="bg-black text-white px-5 py-3 rounded-xl flex items-center gap-2">
          <Plus size={18} />
          Add Address
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-5">

        {addresses.map((address) => (
          <div
            key={address.id}
            className="border rounded-2xl p-5 hover:shadow-lg transition"
          >
            <div className="flex justify-between mb-4">

              <div className="flex items-center gap-2">
                <MapPin size={18} />

                <h3 className="font-semibold">
                  {address.title}
                </h3>
              </div>

              {address.default && (
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  Default
                </span>
              )}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {address.address}
            </p>

            <div className="flex gap-3 mt-5">

              <button className="flex items-center gap-2 border px-4 py-2 rounded-xl hover:bg-gray-50">
                <Pencil size={16} />
                Edit
              </button>

              <button className="flex items-center gap-2 border border-red-200 text-red-600 px-4 py-2 rounded-xl hover:bg-red-50">
                <Trash2 size={16} />
                Delete
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}