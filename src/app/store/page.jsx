import StoreHero from "@/components/store/StoreHero";
import StoreSidebar from "@/components/store/StoreSideBar";
import SortBar from "@/components/store/SortBar";
import ProductGrid from "@/components/store/ProductGrid";
import PromoBanner from "@/components/store/PromoBanner";
import Pagination from "@/components/store/Pagination";

export default function StorePage() {
  return (
    <>
      <StoreHero />

      <section className="px-4 md:px-6 py-5">
        <div className="flex flex-col lg:flex-row gap-5 items-start">

          <StoreSidebar />

          <div className="flex-1 min-w-0">
            <SortBar />

            <ProductGrid />

            <PromoBanner />

            <Pagination />
          </div>

        </div>
      </section>
    </>
  );
}