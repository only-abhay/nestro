export default function ProductCard({ product }) {
  return (
    <div
      className="
      group
      bg-white
      rounded-xl
      border
      border-[#EDE5DA]
      overflow-hidden
      hover:-translate-y-1
      hover:shadow-xl
      transition
    "
    >
      <div className="relative aspect-[4/3] bg-[#F5F0EB]">
        <div className="absolute top-3 left-3 bg-[#8B5E3C] text-white text-[10px] px-2 py-1 rounded">
          {product.badge}
        </div>

        <div
          className="
          absolute
          bottom-0
          inset-x-0
          bg-[#2C2016]/90
          text-[#D6BFA7]
          text-xs
          text-center
          py-3
          opacity-0
          group-hover:opacity-100
          transition
        "
        >
          View Product
        </div>
      </div>

      <div className="p-4">
        <p className="text-[10px] uppercase tracking-[0.14em] text-gray-500 mb-1">
          {product.category}
        </p>

        <h3 className="font-medium mb-3">
          {product.name}
        </h3>

        <div className="flex justify-between items-center">
          <span className="text-xs text-[#C6A27E]">
            ★★★★★ (48)
          </span>

          <div className="flex gap-2">
            <span className="font-semibold">
              {product.price}
            </span>

            {product.oldPrice && (
              <span className="text-gray-400 line-through text-sm">
                {product.oldPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}