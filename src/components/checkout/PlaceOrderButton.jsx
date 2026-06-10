import { ArrowRight } from "lucide-react";

export default function PlaceOrderButton() {
  return (
    <button
      className="
      w-full
      flex
      justify-center
      items-center
      gap-2
      bg-[#8B5E3C]
      text-white
      py-[14px]
      text-[13px]
      rounded-lg
      mt-4
      hover:bg-[#744A2D]
      transition
    "
    >
      Place Order

      <ArrowRight size={16} />
    </button>
  );
}