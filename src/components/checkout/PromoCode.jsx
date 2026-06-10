export default function PromoCode() {
  return (
    <div className="bg-white border rounded-2xl p-4">
      <div className="flex gap-3">

        <input
          defaultValue="Nestro15"
          className="flex-1 border rounded-xl px-4 py-3"
        />

        <button className="px-5 bg-black text-white rounded-xl">
          Apply
        </button>

      </div>

      <div className="mt-4 text-green-700 text-sm">
        ✓ Code applied. You save ₹25,650
      </div>
    </div>
  );
}