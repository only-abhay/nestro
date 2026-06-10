export default function CheckoutSteps() {
  return (
    <div className="flex items-center gap-3 text-sm mb-10">

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
          ✓
        </div>
        Cart
      </div>

      <div className="h-px flex-1 bg-neutral-300" />

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
          2
        </div>
        Delivery
      </div>

      <div className="h-px flex-1 bg-neutral-300" />

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border flex items-center justify-center">
          3
        </div>
        Payment
      </div>

      <div className="h-px flex-1 bg-neutral-300" />

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border flex items-center justify-center">
          4
        </div>
        Review
      </div>

    </div>
  );
}