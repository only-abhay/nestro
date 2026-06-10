import Hero from "@/components/home/Hero";
import Categories from "@/components/home/CategoryStrip";
import BestSellers from "@/components/home/BestSellers";
import NewsletterBanner from "@/components/home/Newsletter";
import NewArrivalSection from "@/components/home/NewArrivals";
import USPSection from "@/components/home/USPSection";
import TestimonialSection from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <BestSellers />
      <NewArrivalSection />
      <USPSection/>
      <TestimonialSection />
      <NewsletterBanner />
    </>
  );
}