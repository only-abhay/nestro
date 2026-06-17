import { bestSellers } from "@/data/products";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6">

        <div className="flex justify-between items-center mb-8">
          <div>
            <span
              className="
                text-[#c6a27e]
                text-xs
                sm:text-sm
                tracking-wider
                uppercase
              "
            >
              Handpicked for you
            </span>

            <h2
              className="
                text-[18px]
                sm:text-[18px]
              "
            >
              Best Sellers
            </h2>
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
            sm:gap-6
          "
        >
          {bestSellers.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}