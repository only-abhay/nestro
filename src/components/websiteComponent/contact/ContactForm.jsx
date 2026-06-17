import { Send } from "lucide-react";
import { subjectOptions } from "@/data/contactData";

export default function ContactForm() {
  return (
    <div className="bg-white border border-[#E7DED3] rounded-[12px] p-7">
      <h2 className="text-[16px] font-medium text-[#2C2016] mb-1">
        Send us a message
      </h2>

      <p className="text-[12px] text-[#8F8F8F] mb-5">
        We typically respond within 24 hours.
      </p>

      <div className="grid grid-cols-2 gap-[14px] mb-[14px]">
        <div>
          <label className="block text-[11px] text-[#8F8F8F] mb-[5px] tracking-[0.04em]">
            First Name
          </label>

          <input
            placeholder="Rahul"
            className="w-full px-3 py-[9px] border border-[#E7DED3] rounded-[6px] bg-[#FAF7F4] text-[12px] outline-none"
          />
        </div>

        <div>
          <label className="block text-[11px] text-[#8F8F8F] mb-[5px] tracking-[0.04em]">
            Last Name
          </label>

          <input
            placeholder="Khanna"
            className="w-full px-3 py-[9px] border border-[#E7DED3] rounded-[6px] bg-[#FAF7F4] text-[12px] outline-none"
          />
        </div>
      </div>

      <div className="mb-[14px]">
        <label className="block text-[11px] text-[#8F8F8F] mb-[5px]">
          Email
        </label>

        <input
          type="email"
          placeholder="rahul@email.com"
          className="w-full px-3 py-[9px] border border-[#E7DED3] rounded-[6px] bg-[#FAF7F4]"
        />
      </div>

      <div className="mb-[14px]">
        <label className="block text-[11px] text-[#8F8F8F] mb-[5px]">
          Subject
        </label>

        <select className="w-full px-3 py-[9px] border border-[#E7DED3] rounded-[6px] bg-[#FAF7F4]">
          {subjectOptions.map((item) => (
            <option key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-[14px]">
        <label className="block text-[11px] text-[#8F8F8F] mb-[5px]">
          Message
        </label>

        <textarea
          rows={5}
          placeholder="Tell us how we can help..."
          className="w-full px-3 py-[9px] border border-[#E7DED3] rounded-[6px] bg-[#FAF7F4] resize-none"
        />
      </div>

      <button className="w-full flex justify-center items-center gap-2 bg-[#8B5E3C] text-white py-3 rounded-md text-sm">
        Send Message
        <Send size={16} />
      </button>
    </div>
  );
}