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
      h-full
      flex
      flex-col
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

      <div className="p-4 flex flex-col flex-1">

        <p className="text-[10px] uppercase tracking-[0.14em] text-gray-500 mb-1">
          {product.category}
        </p>

        <h3 className="font-medium mb-3 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex justify-between items-center gap-2 mt-auto">

          <span className="text-xs text-[#C6A27E] whitespace-nowrap">
            ★★★★★ (48)
          </span>

          <div className="flex flex-wrap justify-end gap-2 items-center">

            <span className="font-semibold whitespace-nowrap">
              {product.price}
            </span>

            {product.oldPrice && (
              <span className="text-gray-400 line-through text-sm whitespace-nowrap">
                {product.oldPrice}
              </span>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}