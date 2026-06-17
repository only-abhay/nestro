export default function PrimaryButton({
  children,
}) {
  return (
    <button className="bg-[#8B5E3C] text-white px-5 py-2 rounded-md text-[12px]">
      {children}
    </button>
  );
}