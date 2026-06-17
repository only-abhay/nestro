export default function DeliveryForm() {
  return (
    <>
      <h3 className="mb-4 text-[13px] font-medium text-[#2C2016]">
        Delivery Information
      </h3>

      <div className="mb-5 grid grid-cols-2 gap-3">

        <Field label="First Name" placeholder="Rahul" />

        <Field label="Last Name" placeholder="Khanna" />

        <div className="col-span-2">
          <Field label="Address" placeholder="42, Malviya Nagar" />
        </div>

        <Field label="City" placeholder="Jaipur" />

        <Field label="PIN Code" placeholder="302017" />

        <Field label="State" placeholder="Rajasthan" />

        <Field label="Phone" placeholder="+91 98765 43210" />

      </div>
    </>
  );
}

function Field({ label, placeholder }) {
  return (
    <div>
      <label className="mb-1 block text-[11px] text-[#9B8F84]">
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="w-full rounded-md border border-[#E4DDD4] bg-white px-3 py-[9px] text-[12px] outline-none focus:border-[#C6A27E]"
      />
    </div>
  );
}