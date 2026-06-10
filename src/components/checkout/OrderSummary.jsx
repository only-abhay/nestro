export default function OrderSummary() {
  return (
    <div className="bg-white border rounded-3xl p-6 sticky top-24">

      <h2 className="font-semibold text-lg mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">

        <Item
          name="Ember Velvet 3-Seater"
          variant="Walnut Brown · 3-Seater"
          price="₹89,000"
        />

        <Item
          name="Travertine Side Table"
          variant="Ivory · Standard"
          price="₹56,000"
        />

      </div>

      <div className="border-t mt-6 pt-6 space-y-3">

        <Row label="Subtotal" value="₹1,45,000" />

        <Row
          label="Delivery"
          value="Free"
        />

        <Row
          label="Assembly"
          value="Free"
        />

        <Row
          label="Discount"
          value="-₹25,650"
        />

        <div className="flex justify-between font-bold text-lg pt-3">
          <span>Total</span>
          <span>₹1,19,350</span>
        </div>

      </div>

    </div>
  );
}

function Item({ name, variant, price }) {
  return (
    <div className="flex justify-between">
      <div>
        <h4 className="font-medium">{name}</h4>

        <p className="text-sm text-neutral-500">
          {variant}
        </p>
      </div>

      <span>{price}</span>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}