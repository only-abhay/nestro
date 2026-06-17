export default function StatCard({
  number,
  label,
}) {
  return (
    <div
      className="
      bg-[#FAF8F5]
      rounded-lg
      p-[14px]
      text-center
    "
    >
      <div
        className="
        text-[20px]
        font-medium
        text-[#8B5E3C]
        mb-1
      "
      >
        {number}
      </div>

      <div
        className="
        text-[10px]
        text-[#8A8178]
        tracking-[0.04em]
      "
      >
        {label}
      </div>
    </div>
  );
}