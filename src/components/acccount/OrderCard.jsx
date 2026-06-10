"use client";

import {
  Package,
  Truck,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export default function OrderCard({
  id,
  product,
  image,
  date,
  price,
  status,
}) {
  const getStatus = () => {
    switch (status) {
      case "Delivered":
        return {
          icon: CheckCircle2,
          className:
            "bg-green-100 text-green-700",
        };

      case "In Transit":
        return {
          icon: Truck,
          className:
            "bg-blue-100 text-blue-700",
        };

      default:
        return {
          icon: Package,
          className:
            "bg-neutral-100 text-neutral-700",
        };
    }
  };

  const statusConfig = getStatus();
  const StatusIcon = statusConfig.icon;

  return (
    <div className="group rounded-3xl border border-neutral-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
      
      <div className="flex flex-col gap-5 md:flex-row md:items-center">
        
        {/* Product Image */}
        <div className="h-24 w-24 overflow-hidden rounded-2xl bg-neutral-100">
          <img
            src={image}
            alt={product}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3 className="font-semibold text-neutral-900">
            {product}
          </h3>

          <p className="mt-1 text-sm text-neutral-500">
            Order #{id}
          </p>

          <p className="text-sm text-neutral-400">
            {date}
          </p>
        </div>

        {/* Status */}
        <div
          className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium ${statusConfig.className}`}
        >
          <StatusIcon size={16} />
          {status}
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="font-bold text-lg">
            ₹{price}
          </p>

          <button className="mt-2 flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700">
            View Details
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}