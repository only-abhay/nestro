import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-3
      gap-4
    "
    >
      {products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
        />
      ))}
    </div>
  );
}