import ContactHero from "@/components/contact/ContactHero";
import ContactInfoItem from "@/components/contact/ContactInfoItem";
import ContactInfoCard from "@/components/contact/ContactInfoCards";
import MapPlaceholder from "@/components/contact/MapPlaceholder";
import ShowroomSection from "@/components/contact/ShowroomSection";
import ContactForm from "@/components/contact/ContactForm";

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