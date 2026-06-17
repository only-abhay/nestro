import RelatedProductCard from "./RelatedProductCard";

export default function RelatedProducts() {
  const products = [
    {
      category: "Storage",
      name: "Nordic Oak Bookcase",
      rating: "★★★★",
      price: "₹42,500",
    },
    {
      category: "Tables",
      name: "Terra Coffee Table",
      rating: "★★★★★",
      price: "₹38,000",
    },
    {
      category: "Chairs",
      name: "Aura Bouclé Armchair",
      rating: "★★★★★",
      price: "₹54,000",
    },
    {
      category: "Tables",
      name: "Travertine Side Table",
      rating: "★★★★★",
      price: "₹28,000",
    },
  ];

  return (
    <section className="px-6 pb-10">
      <div className="flex justify-between items-end mb-[18px]">
        <div>
          <div
            className="
            text-[10px]
            uppercase
            tracking-[0.14em]
            text-[#8A8177]
          "
          >
            You might also like
          </div>

          <h2 className="text-[18px]">
            Related Products
          </h2>
        </div>

        <button
          className="
          text-[#8B5E3C]
          text-[12px]
        "
        >
          View all
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <RelatedProductCard
            key={product.name}
            {...product}
            image={
              <div className="h-[120px] w-full bg-[#EDE5DA]" />
            }
          />
        ))}
      </div>
    </section>
  );
}