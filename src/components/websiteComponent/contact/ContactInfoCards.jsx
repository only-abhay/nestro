import ContactInfoItem from "./ContactInfoItem";
import { contactInfo } from "@/data/contactData";

export default function ContactInfoCard() {
  return (
    <div className="bg-white border border-[#E7DED3] rounded-[12px] p-6 mb-4">
      {contactInfo.map((item) => (
        <ContactInfoItem
          key={item.label}
          {...item}
        />
      ))}
    </div>
  );
}