export default function OrderItem({
  icon,
  qty,
  name,
  variant,
  price,
}) {
  return (
    <div className="flex items-center gap-3 mb-[14px]">
      <div className="relative w-[52px] h-[52px] rounded-lg bg-[#F5F0EB] flex items-center justify-center flex-shrink-0">
        {icon}

        <div className="absolute -top-[6px] -right-[6px] w-[18px] h-[18px] rounded-full bg-[#8B5E3C] text-white text-[9px] flex items-center justify-center">
          {qty}
        </div>
      </div>

      <div className="flex-1">
        <h4 className="text-xs font-medium text-[#2F2A27]">
          {name}
        </h4>

        <p className="text-[10px] text-[#7B746F] mt-[2px]">
          {variant}
        </p>
      </div>

      <div className="text-[13px] font-medium text-[#2F2A27]">
        {price}
      </div>
    </div>
  );
}