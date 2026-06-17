import CheckoutLogo from "./CheckoutLogo";
import CheckoutSteps from "./CheckoutSteps";
import DeliveryForm from "./DeliveryForm";
import ShippingMethod from "./ShippingMethod";
import PaymentSection from "./PaymentSection";
import OrderSummary from "./OrderSummary";
import PromoCode from "./PromoCode";
import PurchaseProtection from "./PurchaseProtection";
import PlaceOrderButton from "./PlaceOrderButton";

export default function CheckoutLayout() {
  return (
    <div className="grid grid-cols-[1.3fr_1fr] min-h-screen">
      
      {/* Left */}

      <div className="px-8 py-7 border-r border-[#E4DDD5]">

        <CheckoutLogo />

        <CheckoutSteps />

        <DeliveryForm />

        <ShippingMethod />

        <PaymentSection />

        <PlaceOrderButton />
      </div>

      {/* Right */}

      <div className="px-7 py-7 bg-[#F8F5F1]">

        <OrderSummary />

        <PromoCode />

        <PurchaseProtection />

      </div>

    </div>
  );
}