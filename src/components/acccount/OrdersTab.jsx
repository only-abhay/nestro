import UserCard from "./UserCard";
import OrderCard from "./OrderCard";

export default function OrdersTab() {
  return (
    <div className="space-y-6">
      
      <UserCard />

      <OrderCard
        id="MN-2847"
        product="Ember Velvet 3-Seater"
        image="/products/sofa.jpg"
        date="May 3, 2026"
        price="89,000"
        status="Delivered"
      />

      <OrderCard
        id="MN-2641"
        product="Travertine Side Table"
        image="/products/table.jpg"
        date="Apr 18, 2026"
        price="28,000"
        status="In Transit"
      />

      <OrderCard
        id="MN-2519"
        product="Aura Bouclé Armchair"
        image="/products/chair.jpg"
        date="Mar 29, 2026"
        price="54,000"
        status="Delivered"
      />
    </div>
  );
}