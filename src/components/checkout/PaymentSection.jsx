export default function PaymentSection() {
  return (
    <>
      <h3 className="mb-4 text-[13px] font-medium">
        Payment
      </h3>

      <div className="mb-4 flex gap-2">

        <Tab active>Credit / Debit Card</Tab>
        <Tab>UPI</Tab>
        <Tab>Net Banking</Tab>
        <Tab>EMI</Tab>

      </div>

      <div className="mb-3 flex gap-2">
        <CardBadge>VISA</CardBadge>
        <CardBadge>MC</CardBadge>
        <CardBadge>AMEX</CardBadge>
        <CardBadge>RuPay</CardBadge>
      </div>

      <div className="grid grid-cols-2 gap-3">

        <div className="col-span-2">
          <Input label="Card Number" />
        </div>

        <Input label="Expiry" />

        <Input label="CVV" />

      </div>
    </>
  );
}

function Tab({ children, active }) {
  return (
    <div
      className={`flex-1 rounded-md border py-2 text-center text-[11px]
      ${
        active
          ? "border-[#8B5E3C] bg-[#FFF8F5] text-[#8B5E3C]"
          : "border-[#E4DDD4]"
      }`}
    >
      {children}
    </div>
  );
}

function CardBadge({ children }) {
  return (
    <div className="rounded bg-[#F0EBE3] px-2 py-1 text-[10px] font-medium">
      {children}
    </div>
  );
}

function Input({ label }) {
  return (
    <div>
      <label className="mb-1 block text-[11px] text-[#9B8F84]">
        {label}
      </label>

      <input className="w-full rounded-md border border-[#E4DDD4] px-3 py-[9px]" />
    </div>
  );
}