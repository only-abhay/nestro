import ContactHero from "@/components/websiteComponent/contact/ContactHero";
import ContactInfoItem from "@/components/websiteComponent/contact/ContactInfoItem";
import ContactInfoCard from "@/components/websiteComponent/contact/ContactInfoCards";
import MapPlaceholder from "@/components/websiteComponent/contact/MapPlaceholder";
import ShowroomSection from "@/components/websiteComponent/contact/ShowroomSection";
import ContactForm from "@/components/websiteComponent/contact/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <div className="px-6 pb-6 grid grid-cols-[1fr_1.4fr] gap-6">
        <div>
          <ContactInfoCard />
          <MapPlaceholder />
          <ShowroomSection />
        </div>

        <ContactForm />
      </div>
    </main>
  );
}