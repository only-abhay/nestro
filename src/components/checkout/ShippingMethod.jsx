import { shippingMethods } from "@/data/checkoutData";

export default function ShippingMethod() {
  return (
    <>
      <h3 className="mb-4 text-[13px] font-medium">
        Shipping Method
      </h3>

      {shippingMethods.map((item) => (
        <div
          key={item.id}
          className={`mb-2 flex cursor-pointer items-center gap-3 rounded-lg border p-3 ${
            item.selected
              ? "border-[#8B5E3C] bg-[#FFF8F5]"
              : "border-[#E4DDD4]"
          }`}
        >
          <div
            className={`h-4 w-4 rounded-full border ${
              item.selected
                ? "border-[#8B5E3C]"
                : "border-[#C6A27E]"
            }`}
          />

          <div className="flex-1">
            <div className="text-[12px]">{item.title}</div>
            <div className="text-[10px] text-[#9B8F84]">
              {item.subtitle}
            </div>
          </div>

          <div className="text-[12px] font-medium">
            {item.price}
          </div>
        </div>
      ))}
    </>
  );
}