export default function PromoCode() {
  return (
    <>
      <div className="flex gap-2 mb-4">
        <input
          defaultValue="Nestro15"
          placeholder="Promo / gift code"
          className="flex-1 px-3 py-[9px] text-xs border border-[#E4DDD5] rounded-md bg-white outline-none"
        />

        <button className="bg-[#1F1A17] text-[#C6A27E] text-[11px] px-4 rounded-md">
          Apply
        </button>
      </div>

      <div className="bg-[#EAF3DE] rounded-lg px-[14px] py-3 flex items-center gap-2 text-[11px] text-[#3B6D11]">
        ✓ Code applied. You save ₹25,650!
      </div>
    </>
  );
}