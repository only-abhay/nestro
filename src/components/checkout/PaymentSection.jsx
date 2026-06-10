export default function PaymentSection() {
  return (
    <div className="mt-10">

      <h2 className="font-semibold text-lg mb-5">
        Payment
      </h2>

      <div className="flex gap-3 mb-6 overflow-x-auto">
        {["Card", "UPI", "Net Banking", "EMI"].map(
          (item) => (
            <button
              key={item}
              className="px-5 py-2 rounded-full border"
            >
              {item}
            </button>
          )
        )}
      </div>

      <div className="grid gap-5">

        <Input
          label="Card Number"
          placeholder="4242 4242 4242 4242"
        />

        <div className="grid grid-cols-2 gap-5">
          <Input
            label="Expiry"
            placeholder="MM/YY"
          />

          <Input
            label="CVV"
            placeholder="•••"
          />
        </div>

      </div>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block mb-2 text-sm">
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="w-full border rounded-xl px-4 py-3"
      />
    </div>
  );
}