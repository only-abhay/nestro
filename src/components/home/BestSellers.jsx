import { bestSellers } from "@/data/products";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  return (
    <section className="">
      <div className="container mx-auto px-6">

        <div className="flex justify-between mb-8">
          <div>
            <span className="text-[#c6a27e] text-sm tracking-wider  uppercase">
              Handpicked for you
            </span>

            <h2 className="text-[18px]">
              Best Sellers
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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