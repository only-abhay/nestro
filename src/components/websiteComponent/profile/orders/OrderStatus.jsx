export default function OrderStatus({
  status,
}) {
  const styles = {
    Delivered:
      "bg-[#EAF3DE] text-[#3B6D11]",

    "In Transit":
      "bg-[#FAEEDA] text-[#854F0B]",
  };

  return (
    <span
      className={`
      text-[10px]
      px-[9px]
      py-[3px]
      rounded-full
      ${styles[status]}
    `}
    >
      {status}
    </span>
  );
}