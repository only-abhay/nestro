import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/contact/ContactForm";
import ShowroomSection from "@/components/contact/ShowroomSection";
import ContactMap from "@/components/contact/ContactMap";
import FAQSection from "@/components/contact/FAQSection";
import ConsultationCTA from "@/components/contact/ConsultationCTA";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoCards />
      <ContactForm />
      <ShowroomSection />
      <ContactMap />
      <FAQSection />
      <ConsultationCTA />
    </>
  );
}