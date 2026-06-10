import CheckoutSteps from "@/components/checkout/CheckoutSteps";
import DeliveryForm from "@/components/checkout/DeliveryForm";
import ShippingMethod from "@/components/checkout/ShippingMethod";
import PaymentSection from "@/components/checkout/PaymentSection";
import OrderSummary from "@/components/checkout/OrderSummary";
import PromoCode from "@/components/checkout/PromoCode";
import PurchaseProtection from "@/components/checkout/PurchaseProtection";

export default function CheckoutPage() {
  return (
    <section className="bg-[#faf8f5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.5fr_450px] gap-8">

        {/* Left */}
        <div className="bg-white rounded-3xl border p-8">
          <div className="text-3xl font-bold mb-8">
            Nestro<span className="text-amber-700">.</span>
          </div>

          <CheckoutSteps />

          <DeliveryForm />

          <ShippingMethod />

          <PaymentSection />

          <button className="w-full mt-8 bg-black text-white py-4 rounded-xl font-medium hover:bg-neutral-800 transition">
            Place Order →
          </button>
        </div>

        {/* Right */}
        <div className="space-y-4">
          <OrderSummary />
          <PromoCode />
          <PurchaseProtection />
        </div>
      </div>
    </section>
  );
}