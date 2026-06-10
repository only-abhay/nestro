import { ShieldCheck } from "lucide-react";

export default function PurchaseProtection() {
  return (
    <div className="mt-4 bg-white border border-[#E4DDD5] rounded-[10px] p-[14px]">
      <div className="flex items-center text-[11px] font-medium text-[#2F2A27] mb-[10px]">
        <ShieldCheck
          size={14}
          className="text-[#8B5E3C] mr-[6px]"
        />

        Purchase Protection
      </div>

      <p className="text-[10px] text-[#7B746F] leading-[1.6]">
        5-year warranty · 30-day returns · Free assembly included ·
        Tracked delivery
      </p>
    </div>
  );
}