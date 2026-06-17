import { Sofa, Table2 } from "lucide-react";
import OrderItem from "./OrderItem";

export default function OrderSummary() {
  return (
    <div className="bg-white border border-[#E4DDD5] rounded-xl p-5 mb-4">
      
      <h3 className="text-sm font-medium text-[#2F2A27] border-b border-[#E4DDD5] pb-3 mb-[14px]">
        Order Summary
      </h3>

      <OrderItem
        icon={<Sofa size={22} className="text-[#C6A27E]" />}
        qty={1}
        name="Ember Velvet 3-Seater"
        variant="Walnut Brown · 3-Seater"
        price="₹89,000"
      />

      <OrderItem
        icon={<Table2 size={22} className="text-[#C6A27E]" />}
        qty={2}
        name="Travertine Side Table"
        variant="Ivory · Standard"
        price="₹56,000"
      />

      <div className="border-t border-[#E4DDD5] pt-[14px] mt-[14px]">

        <div className="flex justify-between text-xs text-[#5F5853] mb-2">
          <span>Subtotal</span>
          <span>₹1,45,000</span>
        </div>

        <div className="flex justify-between text-xs text-[#5F5853] mb-2">
          <span>Delivery</span>
          <span className="text-[#3B6D11]">
            Free
          </span>
        </div>

        <div className="flex justify-between text-xs text-[#5F5853] mb-2">
          <span>Assembly</span>
          <span className="text-[#3B6D11]">
            Free
          </span>
        </div>

        <div className="flex justify-between text-xs text-[#5F5853] mb-2">
          <span>Discount (Nestro15)</span>
          <span className="text-[#3B6D11]">
            -₹25,650
          </span>
        </div>

        <div className="flex justify-between text-[14px] font-medium text-[#2F2A27] border-t border-[#E4DDD5] pt-3 mt-1">
          <span>Total</span>
          <span>₹1,19,350</span>
        </div>

      </div>
    </div>
  );
}