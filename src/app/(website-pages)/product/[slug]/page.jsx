import ProductGallery from "@/components/websiteComponent/product/ProductGallery";
import ProductInfo from "@/components/websiteComponent/product/ProductInfo";
import RelatedProducts from "@/components/websiteComponent/product/RelatedProducts";

export default function ProductPage() {
  return (
    <div>
      <div className="pt-[18px] px-7">
        <button className="flex items-center gap-2 text-[12px] tracking-[0.04em] text-[#8A8177] hover:text-[#8B5E3C]">
          ← Back
        </button>
      </div>

      <div className="grid grid-cols-2 px-6 pb-10">
        <ProductGallery />
        <ProductInfo />
      </div>

      <RelatedProducts />
    </div>
  );
}