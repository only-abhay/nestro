import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <div
      className="
      bg-[#2C2016]
      rounded-xl
      px-6
      py-5
      mt-6
      flex
      flex-col
      md:flex-row
      justify-between
      gap-4
      items-center
    "
    >
      <div>
        <p className="text-[#D6BFA7] text-xs">
          Limited Time Offer
        </p>

        <h3 className="text-white text-lg mt-1">
          Free White Glove Delivery on orders above ₹75,000
        </h3>
      </div>

      <button className="bg-[#8B5E3C] text-white px-5 py-2 rounded">
        <span className="flex items-center gap-2">
          Shop Now
          <ArrowRight size={14} />
        </span>
      </button>
    </div>
  );
}