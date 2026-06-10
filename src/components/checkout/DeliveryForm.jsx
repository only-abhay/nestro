export default function DeliveryForm() {
  return (
    <>
      <h2 className="font-semibold text-lg mb-6">
        Delivery Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <Input label="First Name" placeholder="Rahul" />

        <Input label="Last Name" placeholder="Khanna" />

        <div className="md:col-span-2">
          <Input
            label="Address"
            placeholder="42, Malviya Nagar"
          />
        </div>

        <Input label="City" placeholder="Jaipur" />

        <Input label="PIN Code" placeholder="302017" />

        <Input label="State" placeholder="Rajasthan" />

        <Input
          label="Phone"
          placeholder="+91 98765 43210"
        />
      </div>
    </>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm mb-2">
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}