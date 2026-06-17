export default function AddressCard({
  title,
  address,
  isDefault,
}) {
  return (
    <div
      className="
      relative
      border
      border-[#E8E0D5]
      rounded-lg
      p-[14px]
      "
    >
      {isDefault && (
        <span
          className="
          absolute
          top-2.5
          right-2.5
          text-[9px]
          bg-[#F5EDE4]
          text-[#8B5E3C]
          px-2
          py-1
          rounded-full
          "
        >
          Default
        </span>
      )}

      <h4 className="text-[12px] font-medium mb-2">
        {title}
      </h4>

      <p
        className="
        text-[11px]
        text-[#8A8178]
        leading-6
      "
      >
        {address}
      </p>
    </div>
  );
}