import Link from "next/link";

export default function ProfileNavItem({
  icon: Icon,
  label,
  active,
  onClick,
}) {
  const href =
    label === "Sign Out"
      ? "/auth"
      : "/profile";

  return (
    <Link href={href}>
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-[10px] px-[14px] py-[10px] hover:bg-[#F5EDE4] text-[#8B5E3C] font-medium rounded-lg text-[12px]
        ${
          active
            ? "bg-[#F5EDE4] text-[#8B5E3C] font-medium"
            : "text-[#5E564F]"
        }`}
      >
        <Icon size={15} />
        {label}
      </button>
    </Link>
  );
}