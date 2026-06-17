import StoreHero from "@/components/websiteComponent/store/StoreHero";
import StoreSidebar from "@/components/websiteComponent/store/StoreSideBar";
import SortBar from "@/components/websiteComponent/store/SortBar";
import ProductGrid from "@/components/websiteComponent/store/ProductGrid";
import PromoBanner from "@/components/websiteComponent/store/PromoBanner";
import Pagination from "@/components/websiteComponent/store/Pagination";

export default function StorePage() {
  return (
    <>
      <StoreHero />

      <section className="px-4 md:px-6 py-5">
        <div className="flex flex-col lg:flex-row gap-5 items-start">

          <StoreSidebar />

          <div className="flex-1 mx-auto min-w-0">
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