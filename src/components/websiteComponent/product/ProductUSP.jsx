export default function ProductUSP({
  icon,
  text,
}) {
  return (
    <div
      className="
      flex
      items-center
      gap-2
      p-[10px_12px]
      bg-[var(--bg2)]
      rounded-[8px]
      border
      border-[var(--bord)]
    "
    >
      {icon}

      <div
        className="
        text-[11px]
        leading-[1.4]
        text-[var(--text2)]
      "
      >
        {text}
      </div>
    </div>
  );
}