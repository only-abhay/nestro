export default function ValueCard({
  Icon,
  title,
  text,
}) {
  return (
    <div
      className="
      bg-white
      border
      border-[#E5DDD3]
      rounded-xl
      p-5
    "
    >
      <Icon
        className="
        w-[22px]
        h-[22px]
        text-[#8B5E3C]
        mb-[10px]
      "
      />

      <h3
        className="
        text-[13px]
        font-medium
        text-[#2C2016]
        mb-[6px]
      "
      >
        {title}
      </h3>

      <p
        className="
        text-[11px]
        text-[#8C837A]
        leading-[1.6]
      "
      >
        {text}
      </p>
    </div>
  );
}