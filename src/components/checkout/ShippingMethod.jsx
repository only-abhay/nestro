export default function ShippingMethod() {
  return (
    <div className="mt-10">

      <h2 className="font-semibold text-lg mb-5">
        Shipping Method
      </h2>

      <div className="space-y-4">

        <div className="border rounded-2xl p-4 bg-neutral-50 flex justify-between">
          <div>
            <h4 className="font-medium">
              Standard Delivery
            </h4>

            <p className="text-sm text-neutral-500">
              5–7 business days + free assembly
            </p>
          </div>

          <span className="font-semibold">
            Free
          </span>
        </div>

        <div className="border rounded-2xl p-4 flex justify-between">
          <div>
            <h4 className="font-medium">
              Express Delivery
            </h4>

            <p className="text-sm text-neutral-500">
              2–3 business days
            </p>
          </div>

          <span className="font-semibold">
            ₹1,500
          </span>
        </div>

      </div>
    </div>
  );
}