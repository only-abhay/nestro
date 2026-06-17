export default function ShowroomCard({
  city,
  address,
  hours,
}) {
  return (
    <div className="bg-white border border-[#E7DED3] rounded-[10px] p-4">
      <h4 className="text-[12px] font-medium text-[#2C2016] mb-1">
        {city}
      </h4>

      <p className="text-[10px] text-[#8F8F8F] leading-[1.5] mb-2">
        {address}
      </p>

      <span className="text-[10px] text-[#8B5E3C]">
        {hours}
      </span>
    </div>
  );
}