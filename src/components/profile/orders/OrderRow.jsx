import OrderStatus from "./OrderStatus";

export default function OrderRow({
  icon,
  name,
  meta,
  status,
  price,
}) {
  return (
    <div
      className="
      flex
      items-center
      gap-[14px]
      py-3
      border-b
      border-[#E8E0D5]
    "
    >
      <div
        className="
        w-12
        h-12
        rounded-lg
        bg-[#F5F0EB]
        flex
        items-center
        justify-center
      "
      >
        {icon}
      </div>

      <div className="flex-1">
        <h4 className="text-[12px] font-medium">
          {name}
        </h4>

        <p className="text-[10px] text-[#8A8178] mt-1">
          {meta}
        </p>
      </div>

      <OrderStatus status={status} />

      <div className="text-[13px] font-medium">
        {price}
      </div>
    </div>
  );
}