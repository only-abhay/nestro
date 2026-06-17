export default function ContactInfoItem({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex gap-3 items-start mb-[18px] last:mb-0">
      <div className="w-9 h-9 bg-[#F5EDE4] rounded-[8px] flex items-center justify-center shrink-0">
        <Icon
          size={17}
          className="text-[#8B5E3C]"
        />
      </div>

      <div>
        <div className="text-[10px] uppercase tracking-[0.12em] text-[#8F8F8F] mb-[3px]">
          {label}
        </div>

        <div className="text-[12px] font-medium text-[#2C2016]">
          {value}
        </div>
      </div>
    </div>
  );
}