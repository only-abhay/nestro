import { Check } from "lucide-react";

export default function CheckoutSteps() {
  return (
    <div className="mb-7 flex items-center gap-2">

      <div className="flex items-center gap-1.5 text-[11px] text-[#C6A27E]">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C6A27E] text-white">
          <Check size={10} />
        </div>
        Cart
      </div>

      <div className="h-px w-7 bg-[#E4DDD4]" />

      <div className="flex items-center gap-1.5 text-[11px] text-[#8B5E3C]">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8B5E3C] text-white">
          2
        </div>
        Delivery
      </div>

      <div className="h-px w-7 bg-[#E4DDD4]" />

      <div className="flex items-center gap-1.5 text-[11px] text-[#9B8F84]">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E4DDD4]">
          3
        </div>
        Payment
      </div>

      <div className="h-px w-7 bg-[#E4DDD4]" />

      <div className="flex items-center gap-1.5 text-[11px] text-[#9B8F84]">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E4DDD4]">
          4
        </div>
        Review
      </div>
    </div>
  );
}