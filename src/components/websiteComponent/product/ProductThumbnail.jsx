export default function ProductThumbnail({
  active,
  onClick,
  bgColor,
  children,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-[72px]
        h-[72px]
        rounded-[8px]
        flex
        items-center
        justify-center
        border-[1.5px]
        transition-all
        duration-150
        ${
          active
            ? "border-[#8B5E3C]"
            : "border-transparent hover:border-[#C6A27E]"
        }
      `}
      style={{ background: bgColor }}
    >
      {children}
    </button>
  );
}