import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group transition-all hover:translate-[-3px] border-[#e8e0d5] border-[0.5] bg-white rounded-xl overflow-hidden"
    >
      <div className="h-20 bg-[#f5f5f5] relative ">
        {product.badge && (
          <span className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-5">
        <p className="text-sm text-zinc-500">
          {product.category}
        </p>

        <h3 className="font-medium mt-1">
          {product.name}
        </h3>

        <div className="flex justify-between mt-4">
          <span>{"★".repeat(product.rating)}</span>
          <span className="font-semibold">
            {product.price}
          </span>
        </div>
      </div>
    </Link>
  );
}