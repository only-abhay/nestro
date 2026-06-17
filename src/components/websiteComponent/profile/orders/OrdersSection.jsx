import {
  Sofa,
  Table,
  Armchair,
} from "lucide-react";

import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";

import OrderRow from "./OrderRow";

export default function OrdersSection() {
  return (
    <SectionCard>
      <SectionTitle>
        Recent Orders
      </SectionTitle>

      <OrderRow
        icon={<Sofa size={20} />}
        name="Ember Velvet 3-Seater"
        meta="Order #MN-2847 · May 3, 2026"
        status="Delivered"
        price="₹89,000"
      />

      <OrderRow
        icon={<Table size={20} />}
        name="Travertine Side Table"
        meta="Order #MN-2641 · Apr 18, 2026"
        status="In Transit"
        price="₹28,000"
      />

      <OrderRow
        icon={<Armchair size={20} />}
        name="Aura Bouclé Armchair"
        meta="Order #MN-2519 · Mar 29, 2026"
        status="Delivered"
        price="₹54,000"
      />
    </SectionCard>
  );
}