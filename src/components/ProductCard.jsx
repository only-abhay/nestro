"use client";

import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const router = useRouter();

  return (
    <div
      onClick={() =>
        router.push(`/store/${product.id}`)
      }
      className="cursor-pointer bg-white rounded-xl border overflow-hidden"
    >
      <div className="h-56 bg-gray-100"></div>

      <div className="p-4">
        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <h3 className="font-semibold">
          {product.name}
        </h3>

        <p className="mt-2 font-bold">
          ₹{product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}